import { Expect, Equal } from "@type-challenges/utils";

type Return<T> = T extends (...args: unknown[]) => infer Result ? Result : never;

type TestCases = [
    Expect<Equal<Return<() => number | string>, string | number>>,
    Expect<Equal<Return<<T extends string>() => T>, string>>,
];
