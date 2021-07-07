import { Expect, Equal } from "@type-challenges/utils";

type Merge<T extends {}, Q extends {}> = {
    [P in keyof T | keyof Q]: P extends keyof T & keyof Q
        ? Q[P]
        : P extends keyof T
        ? T[P]
        : P extends keyof Q
        ? Q[P]
        : never;
};

type TestCases = [Expect<Equal<Merge<{ a: number; b: string }, { b: number }>, { a: number; b: number }>>];
