type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

type TestCases = Concat<[1], [2]>;
