export function create2DArray<T extends {}>(x: number, y: number, mapper: (ix: number, iy: number) => T) {
    const xAxis = { length: x };
    const yAxis = { length: y };

    return Array.from(xAxis, (_, kx) => Array.from(yAxis, (_, ky) => mapper?.(kx, ky)));
}
