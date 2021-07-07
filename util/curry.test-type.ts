import { curry } from "./curry";
import { Expect, Equal } from "@type-challenges/utils";

const curried1 = curry((a: number, b: number) => a === b);
const curried2 = curry((a: number, b: string) => a === parseInt(b));

type TestCases = [
    Expect<Equal<typeof curried1, (p: number) => (p: number) => boolean>>,
    Expect<Equal<typeof curried2, (p: number) => (p: string) => boolean>>,
];
