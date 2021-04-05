function sort_mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < m + n; i++) {
        nums1[m + i] = nums2[i];
    }
    nums1.sort((a, b) => a - b);
    /**
     * time: O((m+n)log(m+n)), space: O(log(m+n)) --- quick sort
     */
}

function doublePointer_mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number): void {
    let [p1, p2, current, sorted] = [0, 0, Number.NEGATIVE_INFINITY, Array.from<number>({ length: m + n })];
    while (p1 < m || p2 < n) {
        if (p1 === m) current = nums2[p2++];
        else if (p2 === n) current = nums1[p1++];
        else if (nums1[p1] < nums2[p2]) current = nums1[p1++];
        else current = nums2[p2++];
        // current index: p1 + p2 - 1
        sorted[p1 + p2 - 1] = current;
    }
    for (let i = 0; i < m + n; i++) {
        nums1[i] = sorted[i];
    }
    /**
     * time: O(m+n), space: O(m+n)
     */
}

function reverseDoublePointer_mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number): void {
    let [p1, p2, current, tail] = [m - 1, n - 2, Number.MAX_SAFE_INTEGER, m + n - 1];
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) current = nums2[p2--];
        else if (p2 === -1) current = nums1[p1--];
        else if (nums1[p1] < nums2[p2]) current = nums2[p2--];
        else current = nums1[p1--];
        nums1[tail--] = current;
    }
    /**
     * time: O(m+n), space: O(1)
     */
}
