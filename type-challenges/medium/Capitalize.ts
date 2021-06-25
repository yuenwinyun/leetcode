import { Expect, Equal } from "@type-challenges/utils";

type MyCapitalize<T extends string> = T extends `${infer Head}${infer Rest}` ? `${Uppercase<Head>}${Rest}` : T;

type TestCases = [
    Expect<Equal<MyCapitalize<"any">, "Any">>,
    Expect<Equal<MyCapitalize<"b">, "B">>,
    Expect<Equal<MyCapitalize<"">, "">>,
];
