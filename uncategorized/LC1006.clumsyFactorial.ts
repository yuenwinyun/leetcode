export function clumsyFactorial(n: number): number {
    // https://leetcode.com/problems/clumsy-factorial/discuss/252279/You-never-think-of-this-amazing-O(1)-solution
    const magic = [1, 2, 2, -1, 0, 0, 3, 3];
    return n + (n > 4 ? magic[n % 4] : magic[n + 3]);
}
