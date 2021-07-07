import { curry } from "./curry";
import { strict as assert } from "assert";

export function testCurry() {
    const test = curry((a: number, b: number) => a === b);
    assert.equal(test(1)(1), true);
    assert.equal(test(1)(2), false);
}
