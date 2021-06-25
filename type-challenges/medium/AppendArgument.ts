import { Equal, Expect } from "@type-challenges/utils";

type AppendArgument<T, Arg> = T extends (...args: infer A) => infer R ? (...args: [...A, Arg]) => R : never;

type Fn1 = (a: number, b: string) => number;

type Fn2 = (a: string, b: {}) => number;

type TestCases = [
    Expect<Equal<AppendArgument<Fn1, boolean>, (a: number, b: string, c: boolean) => number>>,
    Expect<Equal<AppendArgument<Fn2, boolean>, (a: string, b: {}, c: boolean) => number>>,
];
