import { Equal, Expect } from "@type-challenges/utils";

type MyExclude<T, K> = T extends K ? never : T;

type TestCases = [Expect<Equal<"age", MyExclude<"name" | "age", "name">>>];
