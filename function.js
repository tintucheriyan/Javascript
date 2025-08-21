function sqr(){
    let num=2
    console.log(num*num)
}
sqr()
//////////////////////////////////////////////////////////////////////////////
function square(num){
    return num*num
}
console.log(square(3))
///////////////////////////////////////////////////////////////////////
function stringCom(){
    let fName='Aibel'
    let space=' '
    let lName='Josh'
    let Fname=fName+space+lName
    return Fname
}
console.log(stringCom())
///////////////////////////////////////////////
function sum(){
    let num1=3
    let num2=3
    let total=num1+num2
    return total
}
console.log(sum())
//////////////////////////////////////////////////////////////////////////
function areaCircle(r){
  let area=Math.PI*r*r
  return area
}
console.log(areaCircle(10))
/////////////////////////////////////////////////////////////////
function Sqr(num3){
    return num3*num3
}
console.log(Sqr(2))
/////////////////////////////////////////////////////////////
function SumTwoNum(num1,num2){
   let sum=num1+num2
   return sum
}
console.log(SumTwoNum(2,10))
/////////////////////////////////////////////////////////////////////
function names(Fname,Lname){
    return `${Fname} ${Lname}`
}
console.log(names('Manu','Jose'))
////////////////////////////////////////////////////////////
function arrSum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
console.log(arrSum([1,2,3,4,5]))
////////////////////////////////////////////////////////////////////////////////
const areaOfCir=(r)=>{
    let area=Math.PI*r*r
    return area
}
console.log(areaOfCir(1))
/////////////////////////////////////////////////

function AllNum(){
    let sum=0
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
        
    }
    return sum
}
console.log(AllNum(1,2,3,4,5))
//////////////////////////////////////////////  ARROW FUNC
const array=(...arg)=>{
    let sum=0
    for(const a of arg){
        sum=sum+a
    }
    return sum
}
console.log(array(1,2,3,4,5,6))
/////////////////////////////////////////     ANONYMOUS FUNC
const anonyFun=function(){
    console.log("I am an anonymous function")
}
anonyFun()
////////////////////////////////////////           EXPRESSION FUNC
const Square=function(n){
    return n*n
}
console.log(square(5))
///////////////////////////////////////////    SELF INVOKING FUNC
const squaredNum=function(n){
    return n*n
}(6)
console.log(squaredNum)
////////////////////////////////////////////////
const lowrToUppr=arr=>{
    let newArr=[]
    for(const element of arr){
        newArr.push(element.toUpperCase())
    }
    return newArr
}
console.log(lowrToUppr(['china','us','canada','india']))
////////////////////////////////////////////////////////////////
function greet(name='peter'){
    return `good morning ${name}`
}
console.log(greet())
console.log(greet('Neethu'))
//////////////////////////////////////////////////////
function CallName(fNAme='Josh',lNAme='manu'){
    return `Full name is" ${fNAme} ${lNAme}`
}
console.log(CallName())
console.log(CallName('Tintu','Cheriyan'))
////////////////////////////////////////////////////////

function Age(birthYear,currntYear=2025){
    let age=currntYear-birthYear
    return age
}
console.log(Age(2000))
////////////////////////////////////////////////////
function wieghtObject(mass,gravity=9.81){
    let w=mass*gravity+'N'
    return w
}
console.log(wieghtObject(10))
/////////////////////////////////////////////////////////    ARROW FUNCTION
const arrowArray=arr=>{
     let newArr=[]
     for(const item of arr){
        newArr.push(item.toUpperCase())
     }
     return newArr
}
console.log(arrowArray(['china','us','canada','dubai']))
/////////////////////////////////////////////////////////////////////////////////////
const FulName=(n1,n2)=>{
      return `Full name is ${n1} ${n2}`
}
console.log(FulName('Aibel','Josh'))
//////////////////////////////////////////////////////////////////////////////////CALL BACK FUNC(Synchronous)
function greet(name){
    console.log(`Hi ${name}`);
    sayBye();
}
function sayBye(){
    console.log("How are you")
}

greet('manu',sayBye)
////////////////////////////////////////////////////////////////////////////////ASYC
function fetchData(callback) {
    setTimeout(function() {
        console.log('Data fetched from server');
        callback();
    }, 2000);
    
}

function processData() {
    console.log('Processing data...');
}

fetchData(processData);
///////////////////////////////////////////////////////////////////////////////////
const numbers=[1,2,3,4,5]
const doubled=numbers.map(function(n){
    return n*2
})
console.log(doubled)
///////////////////////////////////////////////////////
function fetchData(callback){

}