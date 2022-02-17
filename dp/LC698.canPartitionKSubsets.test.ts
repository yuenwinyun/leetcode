import { canPartitionKSubsets } from "./LC698.canPartitionKSubsets";

test("can partition K subsets", () => {
    expect(canPartitionKSubsets([1, 2, 3, 4], 3)).toBeFalsy();
    expect(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4)).toBeTruthy();
});
