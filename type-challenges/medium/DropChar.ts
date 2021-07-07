import { Expect, Equal } from "@type-challenges/utils";

type DropChar<T extends string, R extends string> = T extends `${infer S1}${R}${infer S2}`
    ? `${DropChar<S1, R>}${DropChar<S2, R>}`
    : T;

type TestCases = [
    Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
    Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
    Expect<Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>,
];
