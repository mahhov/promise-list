# promise-l

## Setup

`npm i -save promise-l`

## With traditional promises

```
let promise = Promise.resolve([1, 2, 3, 4]);
promise.then(numList => numList.map(num => num - 1)).then(numList => numList.map(num => num * 2)).then(numList => {console.log(numList)});
// [ 0, 2, 4, 6 ]
```

## With promise-l

```
let promisel = PromiseL.resolve([1, 2, 3, 4]);
promisel.then(num => num - 1).then(num => num * 2).toPromise().then(numList => {console.log(numList)});
// [ 0, 2, 4, 6 ]
```

## Overview
`new PromiseL(promise)`
`proimseL.then(function)`
`promiseL.catch(function)`
`promiseL.toProimse()`
`ProimseL.resolve(array)`
`PromiseL.reject(array)`

## Spec

### constructor

`new PromiseL(Promise)`

accepts a `Promise` that resolves with a array

returns `PromseL`

```
let promise = Promise.resolve();
let promiseL = new PromiseL(promise);
```

### then

`promiseL.then(function)`

returns `ProiseL`

```
let add1 = num => num + 1;
let double = num => num * 2;
promiseL.then(add1).then(double);
```

### catch

`promiseL.catch(function)`

returns `PromiseL`

### toPromise

`promiseL.toPromise()`

returns `Promise`

### resolve

`promiseL.resolve(array)`

returns `PromiseL`

```
let promisel = PromiseL.resolve([1, 2, 3, 4]);
```

### reject

`promiseL.reject(array)`

returns `PromiseL`
