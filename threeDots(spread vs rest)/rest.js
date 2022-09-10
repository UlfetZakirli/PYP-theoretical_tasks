//Rest operator in Js

//Syntax of the rest operator
// const fun=(first,...rest)=>{}

///////////////////////////////////////////////////////////////////////////////////

// const multiplyArgs=(multiplier, ...otherArgs)=>{
//     return otherArgs.map((number)=>{
//         return number*multiplier
//     })
// }
// let multiplierArr=multiplyArgs(5,3,2,9)
// console.log(multiplierArr);

///////////////////////////////////////////////////////////////////////////////////

//with rest operator

// const mul=(first,second,...other)=>{
//     console.log(first);
//     console.log(second);
//     console.log(other); //The Rest parameter must be the last formal parameter.
// }

// mul(4,25,6,8,88)

///////////////////////////////////////////////////////////////////////////////////

// spread and rest operators

// const myFun=(name1,...rest)=>{
//     console.log(name1);
//     console.log(rest);
// }

// let names = ["kenan", "anar", "ebulfez", "suleyman", "behram"];
// myFun(...names)
