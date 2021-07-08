import { curry } from "./curry";
import { Expect, Equal } from "@type-challenges/utils";

const curried1 = curry((a: number, b: number, c: string) => a === b + parseInt(c), 1);
const curried2 = curry((a: number, b: string) => a === parseInt(b));
const curried3 = curry((a: { name: string }, b: { age: number }, c: string) => ({ a, b, c }), { name: "a" });

type TestCases = [
    Expect<Equal<typeof curried1, (p1: number) => (p2: string) => boolean>>,
    Expect<Equal<typeof curried2, (p1: number) => (p2: string) => boolean>>,
    Expect<
        Equal<
            typeof curried3,
            (p1: { age: number }) => (p2: string) => { a: { name: string }; b: { age: number }; c: string }
        >
    >,
];
