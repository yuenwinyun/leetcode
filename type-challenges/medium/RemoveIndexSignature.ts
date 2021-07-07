import { Expect, Equal } from "@type-challenges/utils";

type RemoveIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};

type TestCases = [
    Expect<Equal<RemoveIndexSignature<{ [key: string]: any }>, {}>>,
    Expect<Equal<RemoveIndexSignature<{ [key: string]: any; foo(): string }>, { foo(): string }>>,
];
