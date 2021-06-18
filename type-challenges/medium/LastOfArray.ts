type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type Tail<T extends readonly any[]> = T extends [...infer P, infer Q] ? Q : P;

type tail1 = Tail<arr1>;
type tail2 = Tail<arr2>;
