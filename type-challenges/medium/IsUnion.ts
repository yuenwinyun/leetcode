import { ExpectTrue, ExpectFalse } from "@type-challenges/utils";

/**
type Distributive<T> = T extends any ? T[] : never;

type UnDistributive<T> = [T] extends [any] ? [T] : never;

type IsUnion<T> = UnDistributive<T> extends Distributive<T> ? false : true
 */

type IsUnion<T, B = T> = T extends B ? ([B] extends [T] ? false : true) : never;

type TestCases = [ExpectTrue<IsUnion<"A" | "B">>, ExpectFalse<IsUnion<"A">>];
