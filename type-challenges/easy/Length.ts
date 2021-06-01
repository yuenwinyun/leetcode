import { Equal, Expect } from "@type-challenges/utils";

type Length<T extends readonly any[]> = T["length"];

// type StringLength<T extends string> = T["length"];

type Result = [
    //
    Expect<Equal<Length<[1, 2, 3]>, 3>>,
    Expect<Equal<Length<[1, 2, 3, 4]>, 4>>,
];
