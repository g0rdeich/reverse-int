module.exports = function reverse (n) {
    let res = n.toString().split('').reverse().join('');
    if(res[res.length-1] === '-') {
        res = res.slice(0, res.length-1);
    }
    if(res[res.length-1] === '0') {
        res = res.slice(1, res.length);
    }
    return res;
}
