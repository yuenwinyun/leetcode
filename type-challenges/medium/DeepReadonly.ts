import type { Expect, Equal } from "@type-challenges/utils";

type DeepReadonly<T extends object> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface P {
    name: string;
    age: number;
    p: {
        name: string;
        age: number;
    };
}

interface Expected {
    readonly name: string;
    readonly age: number;
    readonly p: {
        readonly name: string;
        readonly age: number;
    };
}

type Result = [Expect<Equal<Expected, DeepReadonly<P>>>];
