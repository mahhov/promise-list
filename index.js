function PromiseEach(promise) {
    this.then = handler => new PromiseEach(promise.then(dataList => dataList.map(handler)));
    this.catch = handler => new PromiseEach(promise.then(dataList => dataList.map(handler)));
    this.toPromise = () => promise;
};
