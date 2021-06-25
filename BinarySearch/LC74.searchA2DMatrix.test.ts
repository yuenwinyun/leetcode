import { searchA2DMatrix } from "./LC74.searchA2DMatrix";

interface TestProps {
    matrix: number[][];
    target: number;
    result: boolean;
}
//
// test.each`
//     matrix                                                | target | result
//     ${[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]} | ${3}   | ${true}
//     ${[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]} | ${13}  | ${false}
//     ${[[1, 3, 5]]}                                        | ${4}   | ${false}
// `("test searchA2DMatrix", ({ matrix, target, result }: TestProps) => {
//     expect(searchA2DMatrix(matrix, target)).toBe(result);
// });
