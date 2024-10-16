// let arr = [0, 1, 2, 3, 4, 5]
// console.log(arr[2]);
// console.log(arr.includes(12))
// console.log(arr.indexOf(1));

let a = [1,2,3,4,]
let b = ["a","b"]

// a.push(b)
//make changes to the original array
//console.log(a)

// let c = a.concat(b)
c = [...a,...b]
d = [[1,2,3,4],[6,4,7]]
e = d.flat(Infinity)
// console.log(e)


let f = Array.of("Ayush")
let g = Array.from("Ayush")
console.log(f)
console.log(g)


