export type FirstOrArray<T extends readonly any[]> = T extends [infer First, ...infer _] ? First : never;

export type LastOfArray<T extends readonly any[]> = T extends [...infer _, infer Last] ? Last : T;

export type GetFunctionArgsType<T> = T extends (...values: infer V) => any ? V : never;

export type GetFunctionReturnType<T> = T extends (...values: any[]) => infer R ? R : never;

export type InferArgsTypeAndReturnTypeInArray<T> = {
    [K in keyof T]: T[K] extends (...values: infer V) => infer R ? (...values: V) => R : T[K];
};

// TODO: not type-safe on transitive functions
export function compose<
    T extends readonly ((...values: any[]) => any)[],
    R extends (
        ...args: GetFunctionArgsType<LastOfArray<InferArgsTypeAndReturnTypeInArray<T>>>
    ) => GetFunctionReturnType<FirstOrArray<InferArgsTypeAndReturnTypeInArray<T>>>,
>(...fns: [...T]) {
    return (
        fns.length === 0
            ? <T>(p: T) => p
            : (...args: any[]) => {
                  const reversedFns = fns.reverse();
                  let res = reversedFns[0](...args);
                  for (const fn of reversedFns.slice(1)) {
                      res = fn(res);
                  }
                  return res;
              }
    ) as typeof fns extends [] ? <T>(p: T) => T : R;
}
