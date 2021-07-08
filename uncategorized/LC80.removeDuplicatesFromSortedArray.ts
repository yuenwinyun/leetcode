export function removeDuplicatesFromSortedArray(nums: number[]): number {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (slow < 2 || nums[fast] !== nums[slow - 2]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
}
