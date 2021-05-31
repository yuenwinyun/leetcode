type MyReadonly<T extends {}> = {
    readonly [K in keyof T]: T[K];
};

interface O {
    name: string;
    age: number;
}

const o: MyReadonly<O> = {
    name: "",
    age: 2,
};

// @ts-expect-error
o.name = "";
