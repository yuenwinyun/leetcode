import { Equal, Expect } from "@type-challenges/utils";

type StringToArray<S extends string> = S extends `${infer Head}${infer Rest}` ? [Head, ...StringToArray<Rest>] : [];

type LengthOfString<T extends string> = StringToArray<T>["length"];

type TestCases = [
    Expect<Equal<LengthOfString<"aaaaa">, 5>>,
    Expect<Equal<LengthOfString<"ccc">, 3>>,
    Expect<Equal<LengthOfString<"">, 0>>,
];
