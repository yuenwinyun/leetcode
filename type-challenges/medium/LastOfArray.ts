import { Equal, Expect } from "@type-challenges/utils";

type LastOfArray<T extends readonly unknown[]> = T extends [...infer _, infer Q] ? Q : never;

type TestCases = [
    Expect<Equal<LastOfArray<["a", "b", "c"]>, "c">>,
    Expect<Equal<LastOfArray<[3, 2, 1]>, 1>>,
    Expect<Equal<LastOfArray<[3, 2, false]>, false>>,
];
