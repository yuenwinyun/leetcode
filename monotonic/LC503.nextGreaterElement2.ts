export function nextGreaterElement2(nums: number[]): number[] {
    const res = Array.from(nums, () => -1);
    const stack: number[] = [];
    const N = res.length;
    for (let i = 0; i < N * 2; i++) {
        while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i % N]) {
            res[stack.pop()!] = nums[i % N];
        }
        stack.push(i % N);
    }
    return res;
}
