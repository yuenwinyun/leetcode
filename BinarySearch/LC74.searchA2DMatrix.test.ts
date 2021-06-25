import { searchA2DMatrix } from "./LC74.searchA2DMatrix";
import { strict as assert } from "assert";

export function testSearchA2DMatrix() {
    assert.equal(
        searchA2DMatrix(
            [
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60],
            ],
            3,
        ),
        true,
    );
    assert.equal(
        searchA2DMatrix(
            [
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60],
            ],
            13,
        ),
        false,
    );
    assert.equal(searchA2DMatrix([[1, 3, 5]], 4), false);
}
