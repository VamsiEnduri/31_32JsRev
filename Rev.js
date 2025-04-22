// // // // // // // // // // js runtime environment  2009

// // // // // // // // // // 2 araes lo run 

// // // // // // // // // // browser :-- 2009 nodejs ryan dahl

// // // // // // // // // console.log(10+20)
// // // // // // // // // //outide the browser (laptop. server)


// // // // // // // // // data :-- a piece of useful information r raw useful file with str r number 
// // // // // // // // // dataTypes   :-- 2 primitive non-primitive


// // // // // // // // // primitive  which are immutable (we cant modify them)   str, num , boolean, undefined, null
// // // // // // // // //non-primitive which are mutable ( we can modify them )   arrays, objects, function

// // // // // // // // // arrays  :-- array is the data combination of primitive and non-primitive datatypes
// // // // // // // //   var a=[1,"vamsi",27,false,[1,2,3],{id:1}]
// // // // // // // //   console.log(a)
// // // // // // // //   var b=[1,2,3] //3
// // // // // // // //   var c=["vamsi","ravi"] //2

// // // // // // // //   console.log(a.length) //6
// // // // // // // //   a.length=0
// // // // // // // //   a.length=5
// // // // // // // //   console.log(a)
// // // // // // // //   console.log(a[0])
// // // // // // // //   a[0]="vamsi"
// // // // // // // //   console.log(a)

// // // // // // // // console.log(b)
// // // // // // // // var b=200;

// // // // // // // // console.log(a) // trying tomaccess a avarible even befor ethe initisliazation ( hoisting )
// // // // // // // // let a=20  
// // // // // // // // console.log(a)


// // // // // // // // scopes 

// // // // // // // // scope is place where i can access my specific functions r varibles inside that spedfic scope

// // // // // // // // var abc=200;
// // // // // // // // function a(){
// // // // // // // //     var z=100;
// // // // // // // //     console.log(z)
// // // // // // // // }
// // // // // // // // a()
// // // // // // // // console.log(a)
// // // // // // // // console.log(z)
// // // // // // // var x=200;

// // // // // // // {
// // // // // // //     var a=200;
// // // // // // //     let b=200;
// // // // // // //     const c=300;

// // // // // // //     console.log(a)
// // // // // // //     console.log(b)
// // // // // // //     console.log(c)
// // // // // // // }


// // // // // // // // browser --> js run time envirionment --> js engine --> callstack --> GEC --> 2phases

// // // // // // // // anonymus :-- gec 


// // // // // // // // opeartors :--

// // // // // // //  opeartor - + && == === >=

// // // // // // //airhematic 
// // // // // // // compariosn == ===
// // // // // // //logial  && || !
// // // // // // //ternary
// // // // // // //assignmenet



// // // // // // console.log(10 == "10") //true
// // // // // // console.log(10 == "100") //false
// // // // // // console.log(10 === "10") //false

// // // // // // console.log(10 && 20) // true
// // // // // // console.log(10 && 0) // false
// // // // // // console.log(10 && "vamsi") // true
// // // // // // console.log("" && "") // fasle
// // // // // // console.log(10== "10" && 0 === 0) // true

// // // // // // console.log( 10 || 0) // true

// // // // // // console.log(10 || 20) // true
// // // // // // console.log("vamsi" || 20) // true

// // // // // // console.log(!0)  // true
// // // // // // console.log(!0)  // true

// // // // // // console.log(!!0)  // false

// // // // // // console.log(!(0 == "0" && 10 ===10)) // false


// // // // // // // ternary opeartor

// // // // // // console.log(100==="100"? "vamsi":"ravi")





// // // // // // let a="vamsi@10kCoders@gmail.com";
// // // // // // // let b=a.toUpperCase();
// // // // // // // console.log(b)


// // // // // // let a="apple,banana";

// // // // // // let b=a.slice(0,2)
// // // // // // console.log(b)

// // // // // // let c=a.split(",")
// // // // // // console.log(c)

// // // // // // let d=c.reverse().join()
// // // // // // console.log( typeof d)

// // // // // // console.log(Math.random() * 10)

// // // // // // document.getElementById()

// // // // // let fruits=["apple","banana","cutsordApple","dragonFruit","elephantFruit"];

// // // // // for( let fruit in fruits){
// // // // //     console.log(fruits[fruit])
// // // // // }

// // // // // let obj={
// // // // //     anme:"vamsi",
// // // // //     age:26
// // // // // }
// // // // // for (let detail in obj){
// // // // //     console.log(obj[detail])
// // // // // }



// // // // const person = {
// // // //     name: "Vamsi",
// // // //     age: 26,
// // // //     city: "Hyderabad"
// // // //   };
  
// // // //   const keys = Object.keys(person);
// // // //   console.log(keys);  // ['name', 'age', 'city']
  
// // // //   // You can loop through keys
// // // //   for (let key of keys) {
// // // //     console.log(`${key}: ${person[key]}`);
// // // //   }
  
// // // //   const entries=Object.entries(person)
// // // //   for(let [key,value] of entries){
// // // //     console.log(key,value)
// // // //   }


// // // function getPr(){
// // //     return new Promise((resolve,reject)=>{
// // //         let success=true;
    
// // //         if(!success){
// // //             console.log("wait getting the promise resilt")
// // //             setTimeout(()=>{
// // //                 resolve("im successfullll!!")
// // //             },5000)
// // //         }else{
// // //             console.log("wait getting the promise rejection")
// // //            setTimeout(()=>{
// // //             reject("im unsuccessful in life !!")
// // //            },5000)
// // //         }
// // //       })
// // // }
// // // getPr().then(msg=>console.log(msg)).catch(err=>console.log(err))


// // async function  getData() {
// //      const res=await fetch ("https://fakestoreapi.com/products");
// //      const data=await res.json()
// //      console.log(data)
// //     //  console.log(res.json())
// // }
// // getData()


// const data={
//     name:"vamsi"
// }
// const data2={
//     ...data,
//     age:26
// }
// console.log(data2)