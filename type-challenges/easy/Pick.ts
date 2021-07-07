import { Equal, Expect } from "@type-challenges/utils";

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

interface Props1 {
    title: string;
    name: string;
}

interface Props2 {
    abc: number;
    title: number;
    cccc: string;
}

type TestCases = [
    Expect<Equal<{ title: string }, MyPick<Props1, "title">>>,
    Expect<Equal<{ abc: number; cccc: string }, MyPick<Props2, "abc" | "cccc">>>,
];
