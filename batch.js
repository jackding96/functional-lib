function batch(func) {
    let res = [];
    let timer;
    let test;
    return function() {
        function callFunc() {
            test = func.apply(this, arguments);
            return test;
        }
        timer = setTimeout(callFunc, 1000);
    }
}
const func = function() {
    return 'hello';
}
async function runBatch() {
    const batched = batch(func);
    for (let i = 0; i < 10; i++) {
        const res = await batched();
        console.log(res);
    }
}
runBatch();