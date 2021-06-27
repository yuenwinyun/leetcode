import { Expect, Equal } from "@type-challenges/utils";

type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
};

interface P {
    name: string;
    description: string;
    age: number;
}

type Result = [
    //
    Expect<Equal<{ description: string }, MyOmit<P, "age" | "name">>>,
];
