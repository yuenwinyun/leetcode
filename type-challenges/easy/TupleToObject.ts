import { Equal, Expect } from "@type-challenges/utils";

type TupleToObject<T extends readonly (string | number)[]> = {
    [K in T[number]]: K;
};

type TestCases = [
    Expect<Equal<{ A: "A"; B: "B" }, TupleToObject<["A", "B"]>>>,
    Expect<Equal<{ C: "C"; B: "B" }, TupleToObject<["C", "B"]>>>,
];
