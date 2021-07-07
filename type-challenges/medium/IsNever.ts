import { ExpectTrue, ExpectFalse } from "@type-challenges/utils";

type IsNever<T> = [T] extends [never] ? true : false;

type TestCases = [
    ExpectTrue<IsNever<never>>,
    ExpectFalse<IsNever<undefined>>,
    ExpectFalse<IsNever<null>>,
    ExpectFalse<IsNever<[]>>,
    ExpectFalse<IsNever<number>>,
    ExpectFalse<IsNever<any>>,
];
