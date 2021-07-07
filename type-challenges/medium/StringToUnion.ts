import { Expect, Equal } from "@type-challenges/utils";

type StringToUnion<T extends string> = T extends `${infer S1}${infer SRest}` ? S1 | StringToUnion<SRest> : never;

type TestCases = [
    Expect<Equal<StringToUnion<"123">, "1" | "2" | "3">>,
    Expect<Equal<StringToUnion<"abc">, "a" | "b" | "c">>,
];
