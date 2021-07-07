import { Expect, Equal } from "@type-challenges/utils";

type AppendToObject<T extends {}, K extends string, V extends unknown> = {
    [P in keyof T | K]: P extends keyof T ? T[P] : V;
};

type TestCases = [
    Expect<Equal<AppendToObject<{ id: string }, "value", 4>, { id: string; value: 4 }>>,
    Expect<Equal<AppendToObject<{ id: string }, "value", number>, { id: string; value: number }>>,
];
