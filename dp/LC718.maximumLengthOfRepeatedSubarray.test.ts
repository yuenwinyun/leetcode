import { maximumLengthOfRepeatedSubarray } from "./LC718.maximumLengthOfRepeatedSubarray";

test("maximum length of repeated subarray", () => {
    expect(maximumLengthOfRepeatedSubarray([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])).toBe(3);
    expect(maximumLengthOfRepeatedSubarray([0, 0, 0, 0, 0], [0, 0, 0, 0, 0])).toBe(5);
});
