type MyReadonly<T extends {}> = {
    readonly [K in keyof T]: T[K];
};

interface Obj {
    name: string;
    age: number;
}

const obj: MyReadonly<Obj> = {
    name: "",
    age: 2,
};

// @ts-expect-error
obj.name = "";
// @ts-expect-error
obj.age = 3;
