import { ExpectTrue, ExpectFalse } from "@type-challenges/utils";

type IsTruthy<P> = P extends 1
    ? true
    : P extends string
    ? P extends ""
        ? false
        : true
    : P extends boolean
    ? P
    : P extends unknown[]
    ? P["length"] extends 0
        ? false
        : true
    : P extends object
    ? keyof P extends never
        ? false
        : true
    : false;

type AnyOf<T extends unknown[]> = T extends [infer P1, ...infer Rest]
    ? IsTruthy<P1> extends true
        ? true
        : AnyOf<Rest>
    : false;

type TestCases = [
    ExpectTrue<AnyOf<[0, "", {}, [], true]>>,
    ExpectFalse<AnyOf<[0]>>,
    ExpectFalse<AnyOf<[""]>>,
    ExpectFalse<AnyOf<[[]]>>,
];
