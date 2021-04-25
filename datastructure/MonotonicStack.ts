class MonotonicStack<T> {
    protected readonly data: T[] = [];
}

export class IncreasingStack<T = number> extends MonotonicStack<T> {
    put = (value: T) => {
        while (this.data.length > 0 && this.data[this.data.length - 1] > value) {
            this.data.pop();
        }
        this.data.push(value);
    };

    pop = () => {
        return this.data.pop();
    };

    length = () => {
        return this.data.length;
    };
}

export class DecreasingStack<T = number> extends MonotonicStack<T> {
    put = (value: T) => {
        while (this.data.length > 0 && this.data[this.data.length - 1] < value) {
            this.data.pop();
        }
        this.data.push(value);
    };

    pop = () => {
        return this.data.pop();
    };

    length = () => {
        return this.data.length;
    };
}
