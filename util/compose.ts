export default function compose<R>(fn: () => R): () => R;
export default function compose<R, V>(fn: (v: V) => R): (v: V) => R;
export default function compose<R1, R2>(fn2: (r: R1) => R2, fn1: () => R1): () => R2;
export default function compose<R1, R2, R3>(fn3: (r: R2) => R3, fn2: (r: R1) => R2, fn1: () => R1): () => R3;
export default function compose<R1, R2, R3, V1>(fn3: (r: R2) => R3, fn2: (r: R1) => R2, fn1: (v: V1) => R1): () => R3;
export default function compose(...fns: Function[]) {
    return (x: any) => fns.reduceRight((v, f) => f(v), x);
}
