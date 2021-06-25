import { strict as assert } from "assert";
import { nextGreaterElement1 } from "./LC496.nextGreaterElement1";

export function testNextGreaterElement1() {
    assert.equal(nextGreaterElement1([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]);
    assert.equal(nextGreaterElement1([2, 4], [1, 2, 3, 4]), [3, -1]);
}
