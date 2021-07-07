import { Equal, Expect } from "@type-challenges/utils";

type Sign = "+" | "-";
type Unit = "%";

type PercentageParser<T extends string> = T extends `${infer S}${infer D}${Unit}`
    ? S extends Sign
        ? [S, D, Unit]
        : ["", `${S}${D}`, Unit]
    : T extends `${infer S}${infer Rest}`
    ? S extends Sign
        ? [S, Rest, ""]
        : ["", `${S}${Rest}`, ""]
    : ["", "", ""];

type TestCases = [
    Expect<Equal<PercentageParser<"+85%">, ["+", "85", "%"]>>,
    Expect<Equal<PercentageParser<"85%">, ["", "85", "%"]>>,
    Expect<Equal<PercentageParser<"85">, ["", "85", ""]>>,
    Expect<Equal<PercentageParser<"">, ["", "", ""]>>,
];
