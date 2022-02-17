type Curry<T, KnownArgs extends unknown[]> = T extends (...args: infer Args) => infer R
    ? Args extends [...KnownArgs, infer P, ...infer Rest]
        ? (p: P) => Curry<(...args: Rest) => R, []>
        : R
    : never;

export function curry<Func extends (...args: any[]) => unknown, Args extends unknown[]>(fn: Func, ...knownArgs: Args) {
    const funcArgsLength = fn.length;
    return function (this: {}, ...args: unknown[]) {
        const aggregatedArgs = [...knownArgs, ...args];
        if (aggregatedArgs.length === funcArgsLength) {
            return fn.apply(this, aggregatedArgs);
        } else {
            return curry.call(this, fn, ...aggregatedArgs);
        }
    } as Curry<Func, Args>;
}
