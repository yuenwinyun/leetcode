export default function compose<T1, T2, T3>(fn3: (r: T2) => T3, fn2: (r: T1) => T2, fn1: () => T1): () => T3;
export default function compose<V1, T1, T2, T3>(
    fn3: (r: T2) => T3,
    fn2: (r: T1) => T2,
    fn1: (v1: V1) => T1,
): (v1: V1) => T3;
export default function compose<V1, V2, T1, T2, T3>(
    fn3: (r: T2) => T3,
    fn2: (r: T1) => T2,
    fn1: (v1: V1, v2: V2) => T1,
): (v1: V1, v2: V2) => T3;
export default function compose<T>(...fns: Function[]) {
    return (v: T) => {
        let res = v;
        for (const fn of fns.reverse()) {
            res = fn(res);
        }
        return res;
    };
}
