import { Equal, Expect } from "@type-challenges/utils";

type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
};

interface Expected1 {
    A: "A";
    B: "B";
}

type Result = [
    //
    Expect<Equal<Expected1, TupleToObject<["A", "B"]>>>,
];
