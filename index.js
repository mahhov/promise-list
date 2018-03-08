class PromiseL {
    constructor(promise) {
        this.promise = promise;
    }

    then(handler) {
        return new PromiseL(this.promise.then(dataList => dataList.map(handler)));
    }

    catch(handler) {
        return new PromiseL(this.promise.then(dataList => dataList.map(handler)))
    };

    toPromise() {
        return this.promise;
    }

    static resolve(list) {
        return new PromiseL(Promise.resolve(list));
    }

    static reject(list) {
        return new PromiseL(Promise.reject(list));
    }

    static all() {}

    static race() {}
};
