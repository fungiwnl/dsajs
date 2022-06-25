/* Drop constants O(2n) */

// Code runs n+n times, so its a O(2n), but we drop the constant and still say its O(n)
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
    for (let j = 0; i < n; i++) {
        console.log(j)
    }
}
