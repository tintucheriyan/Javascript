function naturalSum(count){
let sum=0
for(let i=0;i<count ||i==count;i++)

    if(i%2==0){
        sum=sum+i
    }
    return sum
}
console.log(naturalSum(8))
///////////////////////////////////////////////////////////////////////
function primeNum(num){
    if(num<2)
      return "Not a prime number"
    else
      for(let i=2;i<=(num**0.5);i++){
        if(num%i==0)
          return "Not a prime number"
      }
      return "prime number"
    
}
console.log(primeNum(17))
//////////////////////////////////////////////////////////////
function getPrimesUpTo50() {
  let primes = [];
  let nonPrimes = [];

  for (let num = 0; num <= 50; num++) {
    if (num < 2) {
      nonPrimes.push(num);
    } else {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(num);
      } else {
        nonPrimes.push(num);
      }
    }
  }

  return { primes, nonPrimes };
}

console.log(getPrimesUpTo50());

///////////////////////////////////////////////////////////////////////
function arrayNum(num){
  arr=[2,3,1,6,5,8,20]
  for(let i=0;i<=arr.length;i++){
      if(arr.indexOf(num)!=-1)
         return `The ${num} is present in the array`
    } 
    return `The ${num} is not present in the array`
  
}
console.log(arrayNum(20))
///////////////////////////////////////////////
function arrayName(name){
   arr=['sanu','manu','nunu','kiki','ramu']
   
    if(arr.includes(name))
     
      return {message:"The name  is present in the array",array:arr}
    
    else
    arr.push(name)
    return{message:"The name is inserted  in the array",array:arr}
} 
console.log(arrayName('sanu'))
//////////////////////////////////////////////////////POP method
function removeName(name){
   let arr=['manu','kichu','dona','tony','sanu']
   let len=arr.length
   if(arr.lastIndexOf(name)){
     arr.pop(name)
     return{message:"Name at the lastIndex is removed",array:arr}
   }
   else
    return{message:"given name is not at the last Index"}
}
console.log(removeName('sanu'))
////////////////////////////////////////////////// splice method
function remvNames(){
   arr=['sini','meenu','rani','mary','dayo','manu']
   arr.splice(2,3)
   console.log("final array is",arr)
} 
remvNames()
///////////////////////////////////////
function delNames(){
  arr=['ani','reena','anju','athu','mahi','chiku']
  let sliced=arr.slice(1,3)
  console.log("names which are sliced",sliced)
}
delNames()
//////////////////////////////////////// reverse
function reverString(){
   let name="welcome to ootty"
   let rev=''
   for(let i=(name.length)-1;i>=0;i--){
      rev=rev+name[i]
      
   }
   console.log(rev)
}
reverString()
///////////////////////////////////
function palindrome(){
  let name="malayalam"
  let rev=""
  for(let i=name.length-1;i>=0;i--){
     rev=rev+name[i]
  }
  if(rev==name)
    console.log("The given name is palindrome")
  else
    console.log("The given name is not palindrome")
}
palindrome()
////////////////////////////////////
function largest(){
   let arr=[1,4,60,3,8,10]
   let max=0
   for(let i=0;i<=arr.length-1;i++)
   {
    if(arr[i]>max)
      max=arr[i]
   }
  console.log("maximum number in the array is",max)
}
largest()
//////////////////////////////////   remove first element from the array
function remFirstItem(){
  let arr=[2,4,6,3,10,7]
  arr.splice(0,1)

  console.log(arr)
}
remFirstItem()
////////////////////////////////////////   find the min from the array
function smallest(){
     let arr=[2,-10,4,7,8,10]
     let min=100
     for(let i=0;i<arr.length-1;i++){
          if(arr[i]<min)
            min=arr[i]
     }
     console.log("The mini value in the array is ",min)
}
smallest()
///////////////////////////////////////////  Longest Word in a String in JavaScript
function longest(){
   let str="welcome to OOtty"
   let arr=str.split(' ')
   let longItem=''
   for(const item of arr){
     if (item.length>longItem.length)
  
      longItem=item
   }
   console.log(longItem)
}
longest()
/////////////////////////////////////////////   Count Vowels in a String in JavaScript
function vowels(){
  let count=0
  let name='welcome'
  for(let item of name){
    if(item=='a' || item=='e'||item=='i'||item=='o'||item=='u')
       count=count+1

  }
  console.log("No.of vowels is",count)
}
vowels()
///////////////////////////////////////    takes an array of numbers and returns a new array with only the even numbers
function even(arr){
  
  let evenArr=[]
  for(let i=0;i<=arr.length-1;i++){
    if(arr[i]%2==0)
      evenArr.push(arr[i])
  }
  console.log(evenArr)
}
even([1,2,3,4,5,6,7,8])
////////////////////////////////////   takes an array of numbers and returns the sum of all positive numbers in the array.
function sumNum(arr){
  let sum=0
  for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>0)
      sum=sum+arr[i]
  }
  console.log("sum of +ve numbers",sum)
}
sumNum([-1,-2,-3,-1,4,5,-10])
/////////////////////////////////////////fibanocci series

function fibanocci(n){
   let a=0
   let b=1
   for(let i=0;i<n;i++){
     console.log("fibanocci series is",a)
     let next=a+b
     a=b
     n=next
   }
}
fibanocci(5)
//////////////////////////////////////// the second highest number in an array of numbers.
function secndHigh(arr){
   let max=0
   let newArr=[]
   for(let i=0;i<arr.length-2;i++){
      for(let j=1;j<arr.length-1;j++){
          if(arr[i]<arr[j])
             arr[i],arr[j]=arr[j],arr[i]

      }
    }
  console.log("second largest number in the array is",arr[1])
}
secndHigh([2,3,1,7,5,4,10])
///////////////////////////////////
function fibonacciSeries(n) {
    let a = 0, b = 1;
    console.log("Fibonacci series:");

    for (let i = 0; i < n; i++) {
        console.log(a);       // Print current number
        let next = a + b;     // Calculate next number
        a = b;                // Shift values
        b = next;
    }
}

fibonacciSeries(10);  // Prints first 10 Fibonacci numbers

