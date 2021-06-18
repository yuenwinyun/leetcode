import { Expect, Equal } from "@type-challenges/utils";

type If<T, P1, P2> = T extends true ? P1 : P2;

// type A = If<string, string, number>;

type Result = [];
