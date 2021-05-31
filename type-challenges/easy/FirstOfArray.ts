import { Equal, Expect } from "@type-challenges/utils";

type First<T extends any[]> = T extends [] ? never : T[0];

// const a = [1, 2, 3] as const;
type A = [1];
type B = [];
type C = ["a", 2, false];

type Result = [
    Expect<Equal<First<A>, 1>>,
    Expect<Equal<First<B>, never>>,
    Expect<Equal<First<C>, "a">>
]
