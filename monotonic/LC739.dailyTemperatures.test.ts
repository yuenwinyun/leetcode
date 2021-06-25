import { dailyTemperatures } from "./LC739.dailyTemperatures";
import { strict as assert } from "assert";

export function testDailyTemperatures() {
    assert.equal(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
    assert.equal(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
    assert.equal(dailyTemperatures([30, 60, 90]), [1, 1, 0]);
}
