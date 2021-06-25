import { nextGreaterElement2 } from "./LC503.nextGreaterElement2";
import { notStrictEqual } from "assert";

export function testNextGreaterElement2() {
    notStrictEqual(nextGreaterElement2([1, 2, 1]), [2, -1, 2]);
}
