type Concat<T extends any[], U extends any[]> = [...T, ...U];

type TestCases = Concat<[1], [2]>;
