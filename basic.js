let numOne=3
let numTwo=3

console.log(numOne==numTwo)   //True

////////////////////////////////////////////////////////////

let js='javascript'
let py='python'

console.log(js==py)      //False

/////////////////////////////////////////////////////////


let lightOn=true
let lightOff=false

console.log(lightOn==lightOff)  //False

/////////////////////////////////////////////////////////////////

let nums=[1,2,3]
nums[0]=10
console.log(nums)

////////////////////////////////////////////////////////////

let numbs=[1,2,3,4]
let numbers=[1,2,3,4]
console.log(numbs==numbers)

///////////////////////////////////////////////////////////

let user1={name:'Manu',
           role:'Engineer',
           age:35
}
let user2={name:'Manu',
           role:'Engineer',
           age:35

}
console.log(user1==user2)

////////////////////////////////////////////////////////////////
let var1=[1,2,3,4]
let var2=var1
console.log(var1==var2)

////////////////////////////////////////////////////////////

let obj1={name:'Josh',
          role:'Student',
          age:4
}
let obj2=obj1
console.log(obj1==obj2)

///////////////////////////////////////////////////////

let age=23
const PIs=3.14
let mass=72
const gravity=9.14
const boilingPoint=100
const bodyTemp=37
console.log(age,PIs,mass,gravity,boilingPoint,bodyTemp)

///////////////////////////////////////////////////////////
const PI=Math.PI
console.log(PI)
console.log(Math.round(PI))
console.log(Math.round(9.81))
console.log(Math.floor(PI))
console.log(Math.ceil(PI))
console.log(Math.min(-5,3,1,2,0))
console.log(Math.max(2,9,10,3))
const randNum=Math.random()
console.log(randNum)
const randNum1=Math.floor(Math.random()*11)
console.log(randNum1)

///////////////////////////////////////////////

space=' '
first_name='Aibel'
Last_name='Manu'
full_name=first_name+space+Last_name
console.log(full_name)
//////////////////////////////////////////////////////
console.log('sum of 2 and 3 is 5')
let a=2
let b=3
console.log(`Sum of ${a} and ${b} is ${a+b}`)
///////////////////////////////////////////////////////////
let Js='javascript'
console.log(js.length)
let name='ManuJose'
let firstLetter=name[0]
console.log(firstLetter)
let secndLetter=name[1]
console.log(secndLetter)
let lastLetter=name[7]
console.log(lastLetter)
let lastindex=name.length-1
console.log(lastindex)
////////////////////////////////////////////////
let string='Javascript'
let F_name='Aibel'
let country='Finland'
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(F_name.toUpperCase())
console.log(F_name.toLowerCase())
console.log(country.toUpperCase())
console.log(country.toLowerCase())

////////////////////////////////////////////////////////
function sqaure(){
    let a=2
    let sq=a*a
    console.log(sq)       //function without parameter
}
sqaure()

function addition(){
    let num1=10
    let num2=30
    let sum=num1+num2
    console.log(sum)
}
addition()

/////////////////////////////////////////////////////

function sqre(n){
    return n*n
}
console.log(sqre(3))
///////////////////////////////////////////////////////
const squa=n=>{
    return n*n
}
console.log(squa(5))

////////////////////////////////////////////////////////
const squareNew=n=>n*n
console.log(squareNew(6))
///////////////////////////////////////////////////
let string1='Javascript'
console.log(string1.substr(4,6))
let string2='finland'
console.log(string2.substring(3,7))
////////////////////////////////////////////////////
let string3="30 days of python"
console.log(string3.split())
console.log(string3.split(''))
let string4='java,php,python'
console.log(string4.split(','))
//////////////////////////////////////////////////////////
let string5=' ABCDEFG '
console.log(string5.trim(''))
////////////////////////////////////////////
let string6='50 days Of java'
console.log(string6.includes('days'))
console.log(string6.includes('python'))
////////////////////////////////////////////////
console.log(string6.replace('java','python'))
//////////////////////////////////////////////////
console.log(string6.charAt(0))
let last_Index=string6.length-1
console.log(string6.charAt(last_Index))
//////////////////////////////////////////////////////////////
console.log(string6.charCodeAt(4))
console.log(string6.charCodeAt(8))
//////////////////////////////////////////////////
let string7="sunday is holiday.monday is not holiday"
console.log(string7.indexOf('is'))
console.log(string7.indexOf('are'))
/////////////////////////////////////////////////////////
console.log(string7.lastIndexOf('holiday'))
//////////////////////////////////////////////////
let string8='Fin'
console.log(string8.concat('land'))
//////////////////////////////////////////////////
console.log(string7.startsWith('sunday'))
console.log(string7.startsWith('friday'))
console.log(string7.endsWith('holiday'))
console.log(string7.endsWith('leave'))
////////////////////////////////////////////////////////////////
console.log(string7.search('is'))
console.log(string7.search(/holiday/gi))
////////////////////////////////////////////////////////////////////////
let string9="welcome to inmakes"
console.log(string9.match('to'))
//////////////////////////////////////////////////////////////////
let string10='welcome'
console.log(string10.repeat(6))
/////////////////////////////////////////////////////////
let fname='Anu'
let Age=32
let Country='India'
let job
console.log(typeof(fname))
console.log(typeof(Age))
console.log(typeof(Country))
console.log(typeof(job))
console.log(typeof(NaN))
console.log(typeof(true))
console.log(typeof(false))
console.log(typeof(3.14))
console.log(typeof(undefined))
console.log(typeof(null))
///////////////////////////////////////////////////////////
let string11='10'
console.log(parseInt(string11))
console.log(+(string11))
console.log(Number(string11))
/////////////////////////////////////////////////////////////
let string12='9.81'
console.log(parseFloat(string12))
console.log(+(string12))
console.log(Number(string12))
console.log(parseInt(string12))
////////////////////////////////////////////////////