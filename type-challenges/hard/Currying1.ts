import { Expect, Equal } from "@type-challenges/utils";

type Currying<P> = P extends (...args: infer A) => infer R
    ? A extends [infer P1, ...infer Rest]
        ? (p: P1) => Currying<(...args: Rest) => R>
        : R
    : P;

type TestCases = [
    Expect<Equal<Currying<(a: number, b: number) => boolean>, (p1: number) => (p2: number) => boolean>>,
    Expect<Equal<Currying<(a: number, b: string) => boolean>, (p1: number) => (p2: string) => boolean>>,
];
