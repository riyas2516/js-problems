
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
// ******************************************append an object to an array***********************
function addObject(arr,obj){
    arr=[...arr,age]
    console.log(arr)
}
let names=['riyas','barath']
let age={age1:22,age2:21}
addObject(names,age)
