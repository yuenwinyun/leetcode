import type { ExpectTrue, ExpectFalse } from "@type-challenges/utils";

type Includes<T extends unknown[], V> = V extends T[number] ? true : false;

type TestCases = [
    ExpectTrue<Includes<[1, 2, 3], 1>>,
    ExpectFalse<Includes<[1, 2, 3], 0>>,
    ExpectFalse<Includes<[1, 2, 3], 0o0>>,
];
