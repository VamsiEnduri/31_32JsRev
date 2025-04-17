// // // // js runtime environment  2009

// // // // 2 araes lo run 

// // // // browser :-- 2009 nodejs ryan dahl

// // // console.log(10+20)
// // // //outide the browser (laptop. server)


// // // data :-- a piece of useful information r raw useful file with str r number 
// // // dataTypes   :-- 2 primitive non-primitive


// // // primitive  which are immutable (we cant modify them)   str, num , boolean, undefined, null
// // //non-primitive which are mutable ( we can modify them )   arrays, objects, function

// // // arrays  :-- array is the data combination of primitive and non-primitive datatypes
// //   var a=[1,"vamsi",27,false,[1,2,3],{id:1}]
// //   console.log(a)
// //   var b=[1,2,3] //3
// //   var c=["vamsi","ravi"] //2

// //   console.log(a.length) //6
// //   a.length=0
// //   a.length=5
// //   console.log(a)
// //   console.log(a[0])
// //   a[0]="vamsi"
// //   console.log(a)

// // console.log(b)
// // var b=200;

// // console.log(a) // trying tomaccess a avarible even befor ethe initisliazation ( hoisting )
// // let a=20  
// // console.log(a)


// // scopes 

// // scope is place where i can access my specific functions r varibles inside that spedfic scope

// // var abc=200;
// // function a(){
// //     var z=100;
// //     console.log(z)
// // }
// // a()
// // console.log(a)
// // console.log(z)
// var x=200;

// {
//     var a=200;
//     let b=200;
//     const c=300;

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }


// // browser --> js run time envirionment --> js engine --> callstack --> GEC --> 2phases

// // anonymus :-- gec 


// // opeartors :--

//  opeartor - + && == === >=

//airhematic 
// compariosn == ===
//logial  && || !
//ternary
//assignmenet



console.log(10 == "10") //true
console.log(10 == "100") //false
console.log(10 === "10") //false

console.log(10 && 20) // true
console.log(10 && 0) // false
console.log(10 && "vamsi") // true
console.log("" && "") // fasle
console.log(10== "10" && 0 === 0) // true

console.log( 10 || 0) // true

console.log(10 || 20) // true
console.log("vamsi" || 20) // true

console.log(!0)  // true
console.log(!0)  // true

console.log(!!0)  // false

console.log(!(0 == "0" && 10 ===10)) // false


// ternary opeartor

console.log(100==="100"? "vamsi":"ravi")








