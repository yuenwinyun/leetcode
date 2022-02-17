import { russianDollEnvelopes } from "./LC354.russianDollEnvelopes";

test("russian doll envelopes", () => {
    expect(
        russianDollEnvelopes([
            [5, 4],
            [6, 4],
            [6, 7],
            [2, 3],
        ]),
    ).toBe(3);

    expect(
        russianDollEnvelopes([
            [1, 1],
            [1, 1],
            [1, 1],
        ]),
    ).toBe(1);
});
