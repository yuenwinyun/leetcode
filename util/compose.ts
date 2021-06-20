type LastOfArray<T extends readonly any[]> = T extends [...infer N, infer P] ? P : never;

export function compose<
    T extends readonly ((...values: any[]) => any)[],
    Result extends LastOfArray<
        {
            [K in keyof T]: T[K] extends (...values: infer V) => infer R ? (...values: [...V]) => R : T[K];
        }
    >,
>(...fns: [...T]) {
    return (
        fns.length === 0
            ? <T>(v: T) => v
            : fns.length === 1
            ? fns[0]
            : fns.reduce(
                  (a, b) =>
                      (...args: any[]) =>
                          a(b(...args)),
              )
    ) as Result;
}
