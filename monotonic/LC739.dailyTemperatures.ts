export function dailyTemperatures(temperatures: number[]): number[] {
    const res = Array.from(temperatures, () => 0);
    const stack: number[] = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const index = stack.pop()!;
            res[index] = i - index;
        }
        stack.push(i);
    }
    return res;
}
