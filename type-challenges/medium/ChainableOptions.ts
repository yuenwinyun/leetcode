import { Alike, Expect } from "@type-challenges/utils";

interface Chainable<R = {}> {
    option<K extends string, T>(optionName: K, value: T): Chainable<R & { [P in K]: T }>;
    get(): R;
}

interface ExpectedResult {
    foo: string;
    name: string;
    description: string;
    bar: {
        value: string;
    };
}

const testCase = ({} as Chainable)
    .option("foo", "1")
    .option("name", "")
    .option("bar", { value: "1" })
    .option("description", "")
    .get();

type TestCases = [Expect<Alike<typeof testCase, ExpectedResult>>];
