import { Expect, Equal } from "@type-challenges/utils";

type Return<T> = T extends (...args: any[]) => infer Result ? Result : never;

type ReturnA = Return<() => number | string>;

type ReturnB = Return<<T extends string>() => T>;

type TestCases = [
    Expect<Equal<Return<() => number | string>, string | number>>,
    Expect<Equal<Return<<T extends string>() => T>, string>>,
];
