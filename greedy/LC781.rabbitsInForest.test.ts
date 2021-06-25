import { rabbitsInForest } from "./LC781.rabbitsInForest";
import { strict as assert } from "assert";

export function testRabbitsInForest() {
    assert.equal(rabbitsInForest([1, 0, 1, 0, 0]), 5);
}
