import { Expect, Equal } from "@type-challenges/utils";

type ReturnType<T> = T extends (...args: unknown[]) => infer Result ? Result : never;

type TestCases = [
    Expect<Equal<ReturnType<() => number | string>, string | number>>,
    Expect<Equal<ReturnType<<T extends string>() => T>, string>>,
];
