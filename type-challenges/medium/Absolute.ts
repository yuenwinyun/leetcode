import { Expect, Equal } from "@type-challenges/utils";

type Absolute<T extends number> = `${T}` extends `-${infer S}` ? S : `${T}`;

type TestCases = [
    Expect<Equal<Absolute<-100>, "100">>,
    Expect<Equal<Absolute<100>, "100">>,
    Expect<Equal<Absolute<-0>, "0">>,
];
