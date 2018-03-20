function flatten(arr) {
    let flat = [];
    arr.forEach((el) => {
        if (Array.isArray(el)) {
            flat = flat.concat(flatten(el));
        } else { flat.push(el); }
    });
    return flat;
}

const arr = [1,2,[3,4,5,[6,7,[8],9],[10,11], 12, [13], 14],[15,16,[17]]];
console.log(flatten(arr));