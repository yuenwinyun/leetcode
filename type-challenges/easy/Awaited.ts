import { Equal, Expect } from "@type-challenges/utils";

const requestSomething = fetch("");

type Awaited<T> = T extends Promise<infer Result> ? Result : never;

type TestCases = [
    Expect<Equal<number, Awaited<Promise<number>>>>,
    Expect<Equal<Response, Awaited<typeof requestSomething>>>,
];
