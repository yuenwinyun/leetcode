export type FirstOrArray<T extends readonly any[]> = T extends [infer First, ...infer _] ? First : never;

export type LastOfArray<T extends readonly any[]> = T extends [...infer _, infer Last] ? Last : T;

export type GetFunctionArgsType<T> = T extends (...values: infer V) => any ? V : never;

export type GetFunctionReturnType<T> = T extends (...values: any[]) => infer R ? R : never;

export type InferArgsTypeAndReturnTypeInArray<T> = {
    [K in keyof T]: T[K] extends (...values: infer V) => infer R ? (...values: V) => R : T[K];
};

export function compose<
    T extends readonly ((...values: any[]) => any)[],
    F extends InferArgsTypeAndReturnTypeInArray<T>,
    FinalResult extends (...args: GetFunctionArgsType<LastOfArray<F>>) => GetFunctionReturnType<FirstOrArray<F>>,
>(...fns: [...T]) {
    if (fns.length === 0) {
        // TODO: type it elegantly
        return ((...v: any[]) => v) as unknown as FinalResult;
    }

    return ((...args: any[]) => {
        // FIXME: need add test case for compose function
        const firstResult = fns.pop()!(...args);
        return fns.reduceRight((prevResult, currentFn) => currentFn(prevResult), firstResult);
    }) as FinalResult;
}

// FIXME: type compose returnType as <T>(v: T) => v if no args provided
const emptyArgsCompose = compose();
