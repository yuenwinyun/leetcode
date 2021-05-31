type Includes<T extends any[], V> = V extends T[number] ? true : false;

// type A = Includes<[1, 2, 3], 4>;
