import { compose } from './compose'

test("[compose] multiply", () => {
    const addOne = (n: number) => n + 1;
    const multiplyTwo = (n: number) => n + 2;
    const composed = compose(multiplyTwo, addOne);
    expect(composed(2)).toBe(5);
});
