// ThreeDots(...) operators in Js/divided two parts spread and rest operator

//Spread operator in Js
///////////////////////////////////////////////////////////////////////////////////

// 1.Copy an Array with Spread Operator(without affecting original array)

// const names=['ulfat','murad']
// const names2=[...names]
// names2.push('hesen')
// console.log(names);
// console.log(names2);

///////////////////////////////////////////////////////////////////////////////////
//with map() 

// const names2=[]
// names.map(name=>{
//         names2.push(name)
// })
// console.log(names2);

///////////////////////////////////////////////////////////////////////////////////

// 2.Copy the object with the spread operator

// let user1={name:'Kenan',surname:'Hesenov'}
// let user2={...user1}
// console.log(user2);

///////////////////////////////////////////////////////////////////////////////////

//with Object.assign() method

// let location1 = {
//     city: 'Baku',
//     country:'Azerbaijan'
// }
// let location2=Object.assign({}, location1)
// location2.population='TenMillion';
// console.log(location1);
// console.log(location2);

///////////////////////////////////////////////////////////////////////////////////

// 3.Concatenate or Merge Arrays With Spread operator

// let num1=[1,2,3,4,5]
// let num2=[6,7,8,9]
// let allNum=[...num1, ...num2]
// console.log(allNum);

///////////////////////////////////////////////////////////////////////////////////

// with concat() method
// let num1=[1,2,3,4,5]
// let num2=[6,7,8,9]
// let allNum=num1.concat(num2)
// console.log(allNum);

///////////////////////////////////////////////////////////////////////////////////

// 4.Concatenate or Merge Objects With Spread operator

// let userName={name:'ulfat'}
// let userSurname={surname:'zakirli'}
// let fullName={...userName, ...userSurname}
// console.log(fullName);

// In a situation where one key has another property, the last property overrides the first instance:
// let userSurname={surname:'zakirli',name:'nicat'}
// let fullName={...userName, ...userSurname}
// console.log(fullName);

///////////////////////////////////////////////////////////////////////////////////

// 5.Retrieve Unique Elements With the Set Method

// let cars=['BMW',"Mercedec",'Ford',"Ford","Mercedec","BMW"]
// let uniqueCars=[...new Set(cars)]
// console.log(uniqueCars);

// let cars=['BMW',"Mercedec",'Ford',"Ford","Mercedec","BMW"]
// let cars2=['BMW',"Tofash","Cruse","BMW"]
// let uniqueAllCars=[...new Set([...cars,...cars2])]
// console.log(uniqueAllCars);


///////////////////////////////////////////////////////////////////////////////////

// 6.Pass Array Elements in Function Calls With the Spread Operator

// let numbers=[442,11,9]
// const sum=(a,b,c)=>{
//     console.log(a+b+c);
// }
// sum(...numbers)

///////////////////////////////////////////////////////////////////////////////////

//with apply() method

// let numbers=[442,11,9]
// const sum=(q,r,a)=>{
//     console.log(q+a+r);
// }
// sum.apply(null,numbers)


///////////////////////////////////////////////////////////////////////////////////

// 7.Split Strings Into Characters Using the Spread Operator

// const text="enjoyCoding"
// const splitMyText=[...text]
// console.log(splitMyText);

///////////////////////////////////////////////////////////////////////////////////

//with split() method

// let word='coding'
// const splitWord=word.split('')
// console.log(splitWord);
