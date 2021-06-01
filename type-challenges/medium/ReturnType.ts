type Return<T> = T extends (...args: any[]) => infer Result ? Result : never;

const A = () => {
    if (Math.random() > 0.4) {
        return 1;
    } else {
        return "1";
    }
};

const B = <T>(t: T) => t;

type ReturnA = Return<typeof A>;

type ReturnB = Return<typeof B>;
