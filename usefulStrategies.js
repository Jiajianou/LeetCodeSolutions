let num = 100;

let len = Math.ceil(Math.log(num + 1) / Math.LN10);

console.log(len);

function nthPlaceOfInt(n, num){
    return Math.floor(num / 10**n % 10);
}

console.log(nthPlaceOfInt(2,123));