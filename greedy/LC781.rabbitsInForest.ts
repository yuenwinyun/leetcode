export function rabbitsInForest(answers: number[]): number {
    const uniqueRabbits = new Map<number, number>();
    answers.forEach(answer => uniqueRabbits.set(answer, (uniqueRabbits.get(answer) || 0) + 1));
    return Array.from(uniqueRabbits.entries()).reduce(
        (acc, [k, v]) => acc + Math.floor((k + v) / (k + 1)) * (k + 1),
        0
    );
}
