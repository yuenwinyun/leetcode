import { compose } from "./compose";
import { Equal, Expect } from "@type-challenges/utils";

const composeWithoutArgs = compose();
const composeWithOneArg = compose((n: number) => n + 1);
const composeWithTwoArgs = compose(
    (n: number) => n + 1,
    (n: number) => n * 2,
);
const composeWithTwoArgs2 = compose(
    (n: number) => n + 1,
    (n: string) => Number.parseInt(n),
);

type TestCases = [
    Expect<Equal<typeof composeWithoutArgs, <T>(n: T) => T>>,
    Expect<Equal<typeof composeWithOneArg, (n: number) => number>>,
    Expect<Equal<typeof composeWithTwoArgs, (n: number) => number>>,
    Expect<Equal<typeof composeWithTwoArgs2, (n: string) => number>>,
];
