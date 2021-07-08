import { clumsyFactorial } from "./LC1006.clumsyFactorial";
import { strict as assert } from "assert";

export function testClumsyFactorial() {
    assert.equal(clumsyFactorial(4), 7);
    assert.equal(clumsyFactorial(10), 12);
}
