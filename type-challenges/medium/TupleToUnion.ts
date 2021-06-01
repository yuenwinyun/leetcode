import type { Equal, ExpectTrue } from "@type-challenges/utils";

type TupleToUnion<T extends any[]> = T[number];

type Result = [
    //
    ExpectTrue<Equal<1 | 2 | 3, TupleToUnion<[1, 2, 3]>>>,
    ExpectTrue<Equal<"1" | "2" | "3", TupleToUnion<["1", "2", "3"]>>>,
];
