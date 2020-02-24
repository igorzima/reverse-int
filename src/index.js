module.exports = function reverse (n) {
    let a = Math.abs(n);
    let result = String(a).split("").reverse().join("");
    return +result;
}
