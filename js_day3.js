let User = {
    username : "Ayush",
    password : "Ayush@123",
    age : 21,
    weight : 64,
    height : 5.8,
    "alive" : false
}

// console.log(User.username)
// console.log(User["age"])
// console.log(User["alive"])


let Member = {
     Personal_Details : {
        first_name : "Ayush",
        last_name : "Kumar Karmi",
        age : 21,
        zodaic_sign : "Tyrus",
    },
    Contact : {
        mobile : "8456846304",
        mail : "ayushkumarkarmi30@gmail.com"
    }
}

//console.log(`My Name is ${Member.Personal_Details.first_name} and my contact number is ${Member.Contact.mobile}`)

function addTwoNumber(num1 = 0, num2 = 0){
    return num1 + num2;
}

// console.log(addTwoNumber())

const multiplyBy3 = function(num1){
    return num1*3
}

// console.log(multiplyBy3(8))

const divideBy5 = (num1) => (num1/5)
//console.log(divideBy5(10))

//IIFE


// (function () {
//     const message = "IIFE in action!";
//     console.log(message);
// })();  // Output: IIFE in action!


(function greet() {
    const message = "Hello from a named IIFE!";
    //console.log(message);
})();
// Output: Hello from a named IIFE!

// let score = 28
// if(score>26){
//     console.log("Winner");  
// }else if(score<26){
//     console.log("Defeat")
// }else{
//     console.log("Draw")
// }

// let num = 2;
// switch (num) {
//     case 1:
//         console.log("One");   
//         break;
//     case 2:
//         console.log("Two")
//         break;
       
//     case 3:
//         console.log("Three");
//         break;

//     default:
//         console.log("Default")
//         break;
// }


// let a = null ?? 15 ?? 45
// let b = undefined??null
// console.log(b)

for(let a = 1;a<10;a++){
    //console.log(`${a} Hello`)
}

// let k = 5;
// while(k--){
//     console.log(k)
// }

// let num = 10;
// for(let i=1;i<11;i++){
//     console.log(`${i} X ${num} = ${i*num}`)
// }

let array = [10,20,30,40]
let sum = 0;
for(let i in array){
    sum+=array[i]
}

// console.log(sum)