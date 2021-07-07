type Curry<P> = P extends (...args: infer A) => infer R
    ? A extends [infer P1, ...infer Rest]
        ? (p: P1) => Curry<(...args: Rest) => R>
        : R
    : P;

// FIXME: type safe with curryArgs
export function curry<F extends (...fnArgs: any[]) => any>(fn: F, ...curryArgs: any[]) {
    const funcArgsLength = fn.length;
    return function (this: unknown, ...args: unknown[]) {
        const aggregatedArgs = [...curryArgs, ...args];
        if (aggregatedArgs.length === funcArgsLength) {
            return fn.apply(this, aggregatedArgs);
        } else {
            return curry.call(this, fn, ...aggregatedArgs);
        }
    } as Curry<F>;
}
