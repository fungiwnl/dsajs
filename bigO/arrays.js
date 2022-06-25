/* Arrays */ 

/* 
/ [11,3 ,23 ,7 ]
/  0  1  2   3
*/

const myArray = [11,3,23,7]

// O(1) 
myArray.push(24)

// O(1)
myArray.pop()

// Reindexing so O(n)
myArray.shift() 

// Reindexing so O(n)
myArray.unshift(11)

// Put something in at index of 1 and not remove any items and 
// add Hi item
// [ 11, "Hi", 3, 23, 7]
myArray = [11,3,23,7]
myArray.splice(1,0,"Hi")

//Find an item O(n)
function include(arr, obj) {
    for ( i = 0; i < arr.length; i++) {
      if (arr[i] == obj) return true;
    }
  }

myArray.includes(3)

//Search with index O(1)
myArray[3]