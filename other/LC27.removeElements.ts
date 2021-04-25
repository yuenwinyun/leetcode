export function removeElements(nums: number[], value: number): number {
    let left = 0,
        right = nums.length;
    while (left < right) {
        if (nums[left] === value) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
}
