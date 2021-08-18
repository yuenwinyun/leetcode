import { russianDollEnvelopes } from "./LC354.russianDollEnvelopes";
import { strict as assert } from "assert";

export function testRussianDollEnvelopes() {
    assert.equal(
        russianDollEnvelopes([
            [5, 4],
            [6, 4],
            [6, 7],
            [2, 3],
        ]),
        3,
    );
    assert.equal(
        russianDollEnvelopes([
            [1, 1],
            [1, 1],
            [1, 1],
        ]),
        1,
    );
}
