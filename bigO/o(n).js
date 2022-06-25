/* Big O */ 

/* 
- A way to mathematically measure which code is better 
- Time complexity (faster and more efficient is better)
- Space complexity (more memory efficient)

- Ω (best case)
- θ (average case)
- O (worst case)
*/

/* Big O is always measuring worse case 

    [1,2,3,4,5,6,7]
     Ω     θ     O

*/ 

// O(n) 
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}