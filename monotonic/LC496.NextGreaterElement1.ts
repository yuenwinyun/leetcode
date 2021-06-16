function nextGreaterElement1(nums1: number[], nums2: number[]): number[] {
    // #1: brute force, O(n^2)
    // const res: number[] = [];
    // for (let i = 0; i < nums1.length; i++) {
    //     const current = nums1[i];
    //     for (let j = 0; j < nums2.length; j++) {
    //         if (nums2[j] > current) {
    //             res.push(nums2[j]);
    //         }
    //     }
    // }

    // #2: use monotonic stack
    const map = new Map<number, number>();
    const stack: number[] = [];
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] < nums2[i]) {
            map.set(stack.pop()!, nums2[i]);
        }
        stack.push(nums2[i]);
    }

    return nums1.map(v => map.get(v) || -1);
}
