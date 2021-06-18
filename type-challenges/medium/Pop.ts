type Pop<T extends readonly any[]> = T extends [...infer P, infer Q] ? P : [];

type popArr1 = ["a", "b", "c"];
type popArr2 = [1, "c", 2];

type re1 = Pop<popArr1>;
type re2 = Pop<popArr2>;
