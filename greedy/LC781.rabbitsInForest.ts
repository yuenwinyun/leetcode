export function rabbitsInForest(answers: number[]): number {
    const uniqueRabbits = new Map<number, number>();
    answers.forEach(answer => {
        const prev = uniqueRabbits.get(answer) || 0;
        uniqueRabbits.set(answer, prev + 1);
    });
    const reducer = (acc: number, [k, v]: [number, number]) => {
        return acc + Math.floor((k + v) / (k + 1)) * (k + 1);
    };
    return Array.from(uniqueRabbits.entries()).reduce(reducer, 0);
}
