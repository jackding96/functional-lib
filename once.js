function once(func) {
    let called, memo; 

    return function() {
        if (called) { return memo;}
        called = true;
        memo = func.apply(this, arguments);
        return memo;
    }
}

const func = function() {
    console.log('FUNC called!');
}
const onceFunc = once(func);

onceFunc();
onceFunc();
onceFunc();
onceFunc();