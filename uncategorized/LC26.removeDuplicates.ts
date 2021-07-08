export function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
        }
    }
    return slow + 1;
}
