import { Equal, Expect } from "@type-challenges/utils";

type LengthOfTuple<T extends readonly unknown[]> = T["length"];

type TestCases = [
    Expect<Equal<LengthOfTuple<[1, 2, 3]>, 3>>,
    Expect<Equal<LengthOfTuple<[1, 2, 3, 4]>, 4>>,
    Expect<Equal<LengthOfTuple<[]>, 0>>,
];
