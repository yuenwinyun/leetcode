import { curry } from "./curry";

test("[curry] equal", () => {
    const equal = curry((a: number, b: number) => a === b);
    expect(equal(1)(1)).toBeTruthy();
    expect(equal(1)(2)).toBeFalsy();
});

test("[curry] add", () => {
    const add = curry((a: number, b: number) => a + b, 1);
    expect(add(1)).toBe(2);
    expect(add(2)).toBe(3);
});
