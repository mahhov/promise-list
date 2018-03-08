## promise-l

### Setup

`npm i -save promise-l`

### With traditional promises

```
let promise = Promise.resolve([1, 2, 3, 4]);
promise.then(numList => numList.map(num => num - 1)).then(numList => numList.map(num => num * 2)).then(numList => {console.log(numList)});
// [ 0, 2, 4, 6 ]
```

### With promise-l

```
let promisel = PromiseEach.resolve([1, 2, 3, 4]);
promisel.then(num => num - 1).then(num => num * 2).toPromise().then(numList => {console.log(numList)});
// [ 0, 2, 4, 6 ]
```
