import { Equal, Expect } from "@type-challenges/utils";

type First<T extends unknown[]> = T extends [] ? never : T[0];

type TestCases = [
    Expect<Equal<First<[1]>, 1>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<["a", 2, false]>, "a">>,
];
