import { Expect, Equal } from "@type-challenges/utils";

type Pop<T extends readonly any[]> = T extends [...infer P, infer _] ? P : [];

type TestCases = [
    //
    Expect<Equal<Pop<["a", "b", "c"]>, ["a", "b"]>>,
    Expect<Equal<Pop<[1, "c", 2]>, [1, "c"]>>,
];
