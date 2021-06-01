type Readonly2<T, K extends keyof T> = T &
    {
        readonly [P in keyof T as P extends K ? P : never]: T[P];
    };

interface P {
    name: string;
    age: number;
    description: string;
}

// type A = MyReadonly2<P, "name" | "age">;
const a: Readonly2<P, "name"> = {
    name: "",
    age: 1,
    description: "",
};

a.age = 2;
a.description = "";
// @ts-expect-error
a.name = "e";
