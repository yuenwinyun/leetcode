abstract class BaseStack<T> {
    protected readonly stack: T[] = [];

    pop() {
        return this.stack.pop();
    }

    protected rear() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        }
    }

    protected put(value: T) {}
}

class IncreasingStack<T extends number> extends BaseStack<T> {
    override put(value: T) {
        let rear = this.rear();
        while (rear && rear > value) {
            this.pop();
            rear = this.rear();
        }
        this.stack.push(value);
    }
}

class DecreasingStack<T extends number> extends BaseStack<T> {
    override put(value: T) {
        let rear = this.rear();
        while (rear && rear < value) {
            this.pop();
            rear = this.rear();
        }
        this.stack.push(value);
    }
}

export const Monotonic = {
    Stack: {
        Increasing: IncreasingStack,
        Decreasing: DecreasingStack,
    },
    Queue: {},
};
