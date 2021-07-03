import { compose } from "./compose";
import { strict as assert } from "assert";

export function testCompose() {
    const addOne = (n: number) => n + 1;
    const multiplyTwo = (n: number) => n * 2;
    const composed = compose(multiplyTwo, addOne);
    assert.equal(composed(2), 6);
}
