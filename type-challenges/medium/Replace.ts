import { Expect, Equal } from "@type-challenges/utils";

type Replace<T extends string, S extends string, R extends string> = T extends `${infer Head}${S}${infer Tail}`
    ? `${Head}${R}${Tail}`
    : T;

type TestCases = [Expect<Equal<Replace<"types are fun!", "fun", "awesome">, "types are awesome!">>]