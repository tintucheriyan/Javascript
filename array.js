const a1=[2,3,5,8,10]
const a2=['apple','orange','banana','grapes']
console.log("First Array:",a1)
console.log("Second Array:",a2)
console.log("length of Array1:",a1.length)
console.log("length of Array2:",a2.length)
//////////////////////////////////////////////////////////
let a3='Javascript'
let a4='java,php,python'
let a5='hi all. welcome to inmakes'
console.log(a3.split(''))
console.log(a4.split(','))
console.log(a5.split(' '))
////////////////////////////////////////////////////////////
console.log(a2[0])
console.log(a2[1])
let lastIndex=a2.length-1
console.log(a2[lastIndex])
///////////////////////////////////////////////////////
let arr=Array(4).fill('x')
console.log(arr)
let arr1=Array(8)
console.log(arr1.fill(0))
////////////////////////////////////////////////////////
let arry1=['apple','guva','cherry']
let arry2=['lemon','lichi','plum']
console.log(arry1.concat(arry2))
let arry3=[1,2,3,4]
let arry4=[5,6,7,8]
console.log(arry3.concat(arry4))
///////////////////////////////////
let arry5=[1,4,2,3]
console.log(arry5.indexOf(1))
console.log(arry5.indexOf(3))
console.log(arry5.indexOf(5))
////////////////////////////////////////////
let arry6=['grapes','lichi','cherry','berry']
let index=arry6.indexOf('apple')
if (index==-1){
  console.log("The fruit is not exists")
}
else{
    console.log("The fruit is exists")
}
////////////////////////////////////////////////////////////
index==-1?console.log("The fruit is not exists"):console.log("The fruit exists")
//////////////////////////////////////////////////////////////
let arry7=[1,2,3,2,5,4,1]
console.log(arry7.lastIndexOf(1))
console.log(arry7.lastIndexOf(2))
console.log(arry7.lastIndexOf(6))
/////////////////////////////////////////////////////////////////////
console.log(arry7.includes(2))
console.log(arry7.includes(5))
console.log(arry7.includes(8))
/////////////////////////////////////////////////////////////////////
console.log(Array.isArray(arry7))
/////////////////////////////////////////////////////////
let num=[1,2,3,4,5]
console.log(num.toString())
let names=['anu','binu','manu','milu']
console.log(names.toString())
/////////////////////////////////////////////////////////////////
let numbers=[1,2,3,4,5,6]
let name=['maya','mary','athu','lilly']
console.log(numbers.join())
console.log(numbers.join(''))
console.log(numbers.join(' '))
console.log(name.join())
console.log(name.join(''))
console.log(name.join(' '))
console.log(name.join(','))
/////////////////////////////////////////////////////////////
console.log(numbers.slice(0))
console.log(numbers.slice())
console.log(numbers.slice(1,4))
///////////////////////////////////////////////////////
console.log(numbers.splice(3,3,7,8,9))
console.log(numbers.splice(1,2))
///////////////////////////////////////////////////////
const num1=[1,2,3,4]
num1.push(5)
console.log(num1)
const str1=['anu','malu','minu']
str1.push('maya')
console.log(str1)
/////////////////////////////////////////////////////////////
num1.pop()
console.log(num1)
/////////////////////////////////////////////////////
num1.shift()
console.log(num1)
///////////////////////////////////////////////////////////
num1.unshift(0)
console.log(num1)
/////////////////////////////////////////////////////////////////
num1.reverse()
console.log(num1)
////////////////////////////////////////////////////
let str2=['python','c','php','oracle','java']
str2.sort()
console.log(str2)
/////////////////////////////////////////////////////////////
const str3=[[1,2,3,4],[6,7,8]]
console.log(str3[0])
console.log(str3[1])