//const team=[
//     {name:"riyas",age: 30},
//     {name:"barath",age:20},
//     {name:"krithiga",age:10},
//     {name:"aishu",age:100},
//     {name:"sushmi",age:50},
    
// ]
// console.log("riyas");
// var a = 10;
// var b = 20;
// console.log(a+b);
// <----------array methods-------->
// ************************filter*******************
// const arr = [1,2,3,4,5,6]
// const arrmap = arr.filter((number)=>{
//     return number>=4;
// })
// console.log(arrmap)
// // ***********************find*************************
// const arr1 = [1,2,3,"riyas",5,6]
// const findnumber = arr1.find((number)=>{
//     return number === "riyas"
// })
// console.log(findnumber)
// const mark = [{name:"riyas",grade:100}
// {name:"krithiga",grade:0},
// {name:"barath",grade:50},
// {name:"aishu",grade:70},
// {name:"sushmi",grade:20}
// ]
// const mapmark = mark.map((item)=>{
//     return item.grade
// })
// console.log(mapmark)
// *************************filter**********************
// const filtermark = mark.filter((item)=>{
//     return item.grade>50
// })
// console.log(filtermark)
// *************************find**********************
// const findmark = mark.find((item)=>{
//     return item.name === "barath"
// })
// console.log(findmark)
// ************************some and every*******************8
// const somemark = mark.every((item)=>{
//     return item.grade<=100
// })
// console.log(somemark)
// ******************reduce*****************
// const totalmark = mark.reduce((initial,item)=>{
//     return item.grade + initial
// },0)
// console.log(totalmark)
// *************************includes********************
// console.log(mark.name.includes("riyas"))

// let a=12
// let b=12
// let add=((a,b)=>{
//     return a +b
    
//     })
//     console.log(Iadd()
// let employee_details={name:"riyas",age:21,gender:"male",role:"developer",education:{
// sslc:2016,hsc:2018,be:2022

// }}
// console.log(employee_details)
// let time=new Date().getDay()
// console.log(time)
// let amount=35000;
// switch(true){
//     case 
//         amount>100000:
//         console.log("buy iphone");
//         break;
//     case 
//         amount>30000:
//         console.log("buy android phone"); 
//         break; 
//     case 
//         amount>10000:
//         console.log("buy basic mobile"); 
//         break; 
//     case 
//         amount<5000:
//         console.log("dont buy mobile")
//         break;
//     default:
//         console.log("invalid input")
                
// }
// let details={
//     name:"riyas",
//     age:21
// }
// for(let key in details){
//     console.log("value",key +":",details[key])
// }
// function person(name,age){
//     return {
//     name:name,
//     age:age,
//     details:function(){
//     let getname_age=`my name is ${this.name} age:${this.age}`
//     }
//     }
//    /* let person1=person("riyas",21) */
//    }
//    let person1=person("riyas",21)
//    console.log(getname_age())
//    *******************************************************javascript programs******************************************
// ********************1.sum and product of an array*******************
let array = [1, 2, 3, 4, 5, 6]
/* let arr=() */
 let   sum = 0
 let   product = 1
 let i;
for (i = 0; i < array.length; i += 1) 
   {
    sum += array[i];
    product *= array[i];
    }
console.log('Sum : '+sum + ' Product :  ' +product); 
// ***************************2.duplicate values*************************
let dupArray = [1, 2, 3, 2, 4,3, 5, 5, 6];
const set = new Set(dupArray);
const duplicates = dupArray.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(duplicates);
// **************************3.mergearray and remove duplicates***************************
function combineArray(array1, array2) {
    return [].concat(array1, array2);
  }
  
  const numberset1 = [1, 2, 3];
  const numberset2 = [1,2,3,4,5,6];
  let numberset=[].concat(numberset1,numberset2)
  console.log((combineArray(numberset1,numberset2)))
  let removeDuplicates = [...new Set(numberset)];
  console.log(removeDuplicates)
//   **********************************4.find element**************************************
// function details(){
//     return details;
//     }
     let details=[{name:'riyas',mark:40},
             {name:'barath',mark:50},
             {name:'krithiga',mark:100}
           ]
    let findPersonDetail=details.find((item)=>{
    return item.name==='riyas'
    })    
    console.log(findPersonDetail)
    // ***********************************7.filter *********************************************
    let candidates=[{name:'mohmmed',age:20},
 {name:'riyas',age:23},
 {name:'barath',age:1},
 {name:'ram',age:14},
 {name:'kishore',age:30},
 {name:'hari',age:56},
 {name:'anas',age:100},
 {name:'jeeva',age:80},
 {name:'vicky',age:04},
 {name:'saravana',age:90},
 {name:'riyan',age:12},
 {name:'salman',age:37},
 {name:'pragadheesh',age:08},
 {name:'jerome',age:76},
 {name:'tamil',age:60},
 {name:'kulasai',age:45},
 {name:'muthu',age:18},
 {name:'raman',age:17},
 {name:'khan',age:87},
 {name:'umapathi',age:53},
 {name:'azar',age:99},
 ]
 let eligible=candidates.filter((details)=>{
 return details.age>=18;
 })
 console.log(eligible)
//  ************************************8.reverse each word in string**************************
function stringReverse(str){
    return str.split(' ').map(function(word) { 
           return word.split('').reverse().join(''); 
       }).join(' ');
    }
   console.log(stringReverse('Welcome to this Javascript Guide!')) 
    