type LastOfArray<T extends readonly any[]> = T extends [...infer _, infer Last] ? Last : never;

type InferParamAndReturnTypeInArray<T> = {
    [K in keyof T]: T[K] extends (...values: infer V) => infer R ? (...values: V) => R : T[K];
};

export function compose<
    T extends readonly ((...values: any[]) => any)[],
    R extends LastOfArray<InferParamAndReturnTypeInArray<T>>,
>(...fns: [...T]) {
    return ((...args: any[]) => {}) as R extends never ? <T>(v: T) => T : R;
}

const emptyArgsCompose = compose(); // FIXME: type compose returnType as <T>(v: T) => v if no args provided
