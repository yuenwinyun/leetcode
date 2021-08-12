import { canPartitionKSubsets } from "./LC698.canPartitionKSubsets";
import { strict as assert } from "assert";

export function testCanPartitionKSubsets() {
    assert.strictEqual(canPartitionKSubsets([1, 2, 3, 4], 3), false);
    assert.strictEqual(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4), true);
}
