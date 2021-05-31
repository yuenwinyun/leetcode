type Concat<T extends any[], U extends any[]> = [...T, ...U];

type A = Concat<[1], [2]>;
