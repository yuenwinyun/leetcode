import { curry } from "./curry";
import { Expect, Equal } from "@type-challenges/utils";

const curried1 = curry((a: number, b: number, c: string) => a === b + parseInt(c), 1);
const curried2 = curry((a: number, b: string) => a === parseInt(b));

type TestCases = [
    Expect<Equal<typeof curried1, (p1: number) => (p2: string) => boolean>>,
    Expect<Equal<typeof curried2, (p1: number) => (p2: string) => boolean>>,
];
