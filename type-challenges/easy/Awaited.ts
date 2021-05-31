import { Equal, Expect } from "@type-challenges/utils";

const requestSomething = fetch("");

type Awaited<T> = T extends Promise<infer Result> ? Result : never;

type _ = [
    //
    Expect<Equal<number, Awaited<Promise<number>>>>,
    Expect<Equal<Response, Awaited<typeof requestSomething>>>,
];
