export function searchA2DMatrix(matrix: number[][], target: number) {
    const N = matrix[0].length;
    const M = matrix.length;
    let rowLeft = 0,
        rowRight = M - 1;
    let rowIndex: number = -1;
    while (rowLeft <= rowRight) {
        const mid = Math.floor((rowRight - rowLeft) / 2) + rowLeft;
        if (matrix[mid][N - 1] === target) {
            return true;
        } else if (matrix[mid][N - 1] > target) {
            rowIndex = mid;
            rowRight = mid - 1;
        } else if (matrix[mid][N - 1] < target) {
            rowLeft = mid + 1;
        }
    }

    let left = 0,
        right = N - 1;
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;
        if (matrix[rowIndex][mid] === target) {
            return true;
        } else if (matrix[rowIndex][mid] > target) {
            right = mid - 1;
        } else if (matrix[rowIndex][mid] < target) {
            left = mid + 1;
        }
    }

    return false;
}
