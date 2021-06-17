import { nextGreaterElement1 } from "./LC496.nextGreaterElement1";

test("nextGreaterElement1", () => {
    expect(nextGreaterElement1([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
    expect(nextGreaterElement1([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
});
