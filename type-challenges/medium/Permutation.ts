import { Equal, Expect } from "@type-challenges/utils";

// TODO
type Permutation<T, K = T> = [T] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never;

type TestCases = [
    Expect<Equal<Permutation<"A">, ["A"]>>,
    Expect<Equal<Permutation<"A" | "B">, ["A", "B"] | ["B", "A"]>>,
    Expect<
        Equal<
            Permutation<"A" | "B" | "C">,
            ["A", "B", "C"] | ["A", "C", "B"] | ["B", "A", "C"] | ["B", "C", "A"] | ["C", "A", "B"] | ["C", "B", "A"]
        >
    >,
];
