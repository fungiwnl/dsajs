/* O(n^2) often considered as inefficent code  */

// n * n = O(n^2)
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i,j)
        }
    }
}

//n*n*n = O(n^2) simplifies to O(n^3)
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(i,j,k)
            }
        }
    }
}
