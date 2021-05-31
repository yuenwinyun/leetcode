import { Equal, Expect } from "@type-challenges/utils";

type Reverse<T extends string> = T extends `${infer Head}${infer Tail}` ? `${Reverse<Tail>}${Head}` : T;

type Result = [
    //
    Expect<Equal<Reverse<"abc">, "cba">>,
    Expect<Equal<Reverse<"-caca-">, "-acac-">>
];
