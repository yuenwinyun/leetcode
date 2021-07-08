import { curry } from "./curry";
import { strict as assert } from "assert";

export function testCurry() {
    const test = curry((a: number, b: number) => a === b);
    assert.equal(test(1)(1), true);
    assert.equal(test(1)(2), false);

    const test2 = curry((a: number, b: number) => a + b, 1);
    assert.equal(test2(1), 2);
    assert.equal(test2(2), 3);
}
