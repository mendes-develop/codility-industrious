function solution(n) {
    array = new Array(30);
    l = 0;
    while (n > 0) {
        array[l] = n % 2;
        n = Math.floor(n / 2);
        l += 1;
    }
    console.log(array)
    console.log(l)
    for (p = 1; p < 1 + Math.floor(l / 2); ++p) { // (1+l)/2
        ok = true;
        for (i = 0; i < l - p; ++i) {
            if (array[i] != array[i + p]) {
                ok = false;
                break;
            }
        }
        if (ok) {
            return p;
        }
    }
    return -1;
}

console.log("solution: ", solution(955))
// console.log(solution(1651))
// console.log(solution(102))
// console.log(solution(36))
// console.log(solution(204))
// console.log(solution(61680))
// console.log(solution(42))
// console.log(solution(9))







// 1651 => 5
// 955 => 4