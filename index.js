class PromiseEach {
    constructor(promise) {
        this.promise = promise;
    }

    then(handler) {
        return new PromiseEach(promise.then(dataList => dataList.map(handler)));
    }

    catch(handler) {
        return new PromiseEach(promise.then(dataList => dataList.map(handler)))
    };

    toPromise() {
        return promise
    }

    static resolve(list) {
        return new PromiseEach(Promise.resolve(list));
    }

    static reject(list) {
        return new PromiseEach(Promise.reject(list));
    }

    static all() {}

    static race() {}
};
