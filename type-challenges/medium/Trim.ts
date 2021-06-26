import { Expect, Equal } from "@type-challenges/utils";

type Trim<T extends string> = T extends ` ${infer S}` ? Trim<S> : T extends `${infer S} ` ? Trim<S> : T;

type TestCases = [
    Expect<Equal<Trim<" a">, "a">>,
    Expect<Equal<Trim<" a ">, "a">>,
    Expect<Equal<Trim<" a">, "a">>,
    Expect<Equal<Trim<" a b">, "a b">>,
    Expect<Equal<Trim<" a b ">, "a b">>,
    Expect<Equal<Trim<"a b ">, "a b">>,
];
