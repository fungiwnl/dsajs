/* Drop non-dominants */

// O(a + b) is as far as you can simplify as a and b can be 
// different inputs e.g a could contain one item and b could be
// a million 

function logItems(a,b) {
    for (let i = 0; i < a; i++) {
        console.log(i)
    }

    for (let j = 0; j < b; j++) {
        console.log(ji)
    }
}

// O(a * b)
function logItems(a,b) {
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            console.log(i,j)
        }
    }
}

// O(n^2 + n) --> O(n^2) and drop the non dominant n 
// as n^2 input takes longer to run 
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i,j)
        }
    }

    for (let k = 0; k < a; k++) {
        for (let k = 0; k < b; k++) {
            console.log(k)
        }
    }
}
