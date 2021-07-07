import { Expect, Equal } from "@type-challenges/utils";

type MyCamelCase<T extends string, isFirst extends boolean = true> = T extends `${infer S1}-${infer S2}`
    ? `${isFirst extends true ? Lowercase<S1> : Capitalize<S1>}${MyCamelCase<S2, false>}`
    : isFirst extends true
    ? T
    : Capitalize<T>;

type TestCases = [
    Expect<Equal<MyCamelCase<"foo-bar-baz">, "fooBarBaz">>,
    Expect<Equal<MyCamelCase<"apple-banana-carrot">, "appleBananaCarrot">>,
];
