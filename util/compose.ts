type LastOfArray<T extends readonly any[]> = T extends [...infer N, infer P] ? P : never;

export default function compose<
    T extends readonly ((...values: any[]) => any)[],
    Result extends LastOfArray<
        {
            [K in keyof T]: T[K] extends (...values: infer V) => infer R ? (...values: V) => R : T[K];
        }
    >,
>(...fns: [...T]) {
    return ((v: T) => {
        let res = v;
        for (const fn of fns.reverse()) {
            res = fn(res);
        }
        return res;
    }) as Result;
}
