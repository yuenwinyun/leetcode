import { clumsyFactorial } from './LC1006.clumsyFactorial'

test("test clumsy factorial", () => {
    expect(clumsyFactorial(4)).toBe(7);
    expect(clumsyFactorial(10)).toBe(12);
});
