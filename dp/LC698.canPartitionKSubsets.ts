export function canPartitionKSubsets(nums: number[], k: number): boolean {
    if (k > nums.length) {
        return false;
    }
    const sum = nums.reduce((accm, v) => accm + v, 0);
    if (sum % k !== 0) {
        return false;
    }
    const visited = Array.from(nums, () => false);
    return dfs(
        nums.sort((a, b) => a - b),
        0,
        nums.length - 1,
        visited,
        sum / k,
        k,
    );
}

function dfs(nums: number[], sum: number, lastIndex: number, visited: boolean[], target: number, round: number) {
    if (round === 0) {
        return true;
    }
    if (sum === target && dfs(nums, 0, nums.length - 1, visited, target, round - 1)) {
        return true;
    }

    for (let i = lastIndex; i >= 0; --i) {
        if (!visited[i] && sum + nums[i] <= target) {
            visited[i] = true;
            if (dfs(nums, sum + nums[i], i - 1, visited, target, round)) {
                return true;
            }
            visited[i] = false;
        }
    }

    return false;
}
