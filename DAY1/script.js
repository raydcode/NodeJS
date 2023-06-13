console.log("Basics Of JavaScript !!!");

// DataTypes :

/*

1. Primitive Data Types
    .Number
    .String
    .Boolean
    .Symbol
    .Null
    .Undefined
2. Reference Data Types
    .Array
    .Object
    .Function
*/

// Type coercion

console.log( 1 == "1")
console.log( 1 === "1")
var num = 1;

// Type Casting 
console.log(Number("1"));


console.log(num)


// Reference Data Types


// array

var arr = [1,2,3,4,5]
var arr = [1,"2",true,4,5]
var findSham = ["1","2",[2,[3,4,["sham"]]],4,5]

console.log(arr[0])
console.log(findSham[2][1][2][0])

// Objects

var obj = {
    name:"Sham",
    age:20
}

console.log(obj.name)
console.log(obj["age"])
console.log(obj["ray"])


// Function Definition
function add(a,b){
    return a+b
}

console.log(add(1,2))

// Function Expression
var add1 = function(a,b){
    return a+b
}

console.log(add1(1,3))


// Hoisting

/**
 *   1. variable Hoisting
 *   2. functional Hoisting
 */

// 1.variable Hoisting

console.log(a)

var a = 1;

a = 3;

// 2. functional Hoisting

console.log(tricky())

function tricky(){
    console.log("Venna Mavaleyyyy")
}

// let , const , arrow function



// console.log(b)

// let b = 1;


const PI  = 3.14
// PI = 2
console.log(PI)





var newtricky = () => {
    console.log("Venna Mavaleyyyy")
}

console.log(newtricky())

const whoiam = ()=> "Hey I'm Sham"
console.log(whoiam())


// Array Methods 

let numbers = [1,2,3,4,5,6]

const value = numbers.forEach(function(number,index,sham){

    console.log("value",number)
    console.log("index",index)
    console.log("array",sham)

})

console.log(value)



const multiplyOf2 = numbers.map(function(number){
    return number*2
})

console.log(multiplyOf2)

const evenNumbers = numbers.filter(function(number){
    return number%2 == 0
})

console.log(evenNumbers)


function findOdd(number){
    return number%2 !== 0
}

const oddNumbers = numbers.filter(findOdd)

console.log(oddNumbers)


const anotherOdd = numbers.filter((number)=>{
    return number%2 !== 0
})

console.log(anotherOdd)

/**
 *  Object Methods:
 */

const person = {
    name:"Sham",
    age:22, // july 19 she will be 23 years old girl
    country:"India",
    city:"Chennai",
    sex:"Female"
}


// To get Object Values:

console.log(Object.values(person))

// To get Object Keys: 
console.log(Object.keys(person))

// Both values and keys :
console.log(Object.entries(person))



// Adhoc Loops:

const names = ["Sham","Ray","Ribasa"]


for (const name of names) { // array

    console.log(name)
    
}


console.log("------------------------------------")

for (const key in person) {
    
    console.log(person[key])
}


// Timer Functions:

setTimeout(function(){
    console.log("Heyyyyy")
},1000)


// setInterval(function(){
//     console.log("Hello")
// },1000)

console.log("------------------------------------")

