import { dailyTemperatures } from "./LC739.dailyTemperatures";
import { notStrictEqual } from "assert";

export function testDailyTemperatures() {
    notStrictEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
    notStrictEqual(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
    notStrictEqual(dailyTemperatures([30, 60, 90]), [1, 1, 0]);
}
