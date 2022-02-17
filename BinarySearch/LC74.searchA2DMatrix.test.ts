import { searchA2DMatrix } from "./LC74.searchA2DMatrix";

test("search 2D matrix", () => {
    expect(
        searchA2DMatrix(
            [
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60],
            ],
            3,
        ),
    ).toBeTruthy();

    expect(
        searchA2DMatrix(
            [
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60],
            ],
            13,
        ),
    ).toBeFalsy();

    expect(searchA2DMatrix([[1, 3, 5]], 4)).toBeFalsy();
});
