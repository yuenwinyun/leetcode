import type { ExpectTrue, ExpectFalse } from "@type-challenges/utils";

type Includes<T extends any[], V> = V extends T[number] ? true : false;

type Result = [
    ExpectTrue<Includes<[1, 2, 3], 1>>,
    ExpectFalse<Includes<[1, 2, 3], 0>>,
    ExpectFalse<Includes<[1, 2, 3], 0o0>>,
];
