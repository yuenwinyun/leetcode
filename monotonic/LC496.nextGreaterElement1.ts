export function nextGreaterElement1(nums1: number[], nums2: number[]): number[] {
    // TIP: nums1 is a subset of nums2
    const map = new Map<number, number>();
    const stack: number[] = [];
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            map.set(stack.pop()!, nums2[i]);
        }
        stack.push(nums2[i]);
    }
    return nums1.map(v => map.get(v) ?? -1);
}
