class Error {
    constructor(private error: string) {
    }

    get setError() {
        return this.error
    }

    set setError(error: string) {
        this.error = error
    }
}

export const error = new Error('');
