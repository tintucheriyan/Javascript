function fullName(){
    let fName='Tintu'
    let lName='Cheriyan'
    return `${fName} ${lName}`
}
console.log(fullName())
//////////////////////////////////////////////////////////////////////////////

function FulName(Fname,Lname){
    let name=Fname+' '+Lname
    return name
}
console.log(FulName('Maya','mohan'))
////////////////////////////////////////
function add(num1,num2){
    let sum=0
    sum=num1+num2
    return sum
}
console.log(add(5,5))
//////////////////////////////////////////////
function Rect(num1,num2){
    let area=num1*num2
    return area

}
console.log(Rect(3,2))
////////////////////////////////////////////////
function Perimeter(num1,num2){
    let Peri=2*(num1+num2)
    return Peri
}
console.log(Perimeter(2,3))
///////////////////////////////////////////
function Prism(l,w,h){
    let area=l*w*h
    return area
}
console.log(Prism(2,3,4))
/////////////////////////////////////////////
function Circle(r){
    let area=Math.PI*r*r
    return area
}
console.log(Circle(3))
////////////////////////////////////////////////
function Circum(r){
    let circumfrence=2*Math.PI*r
    return circumfrence
}
console.log(Circum(10))
///////////////////////////////////////
function density(m,v){
    let d=m/v
    return d
}
console.log(density(10,2))
///////////////////////////////////////
function Speed(d,t){
    let speed=d/t
    return speed
}
console.log(Speed(20,5))
////////////////////////////////////
function Weight(m){
    const g=9.14
    let w=m*g
    return w
}
console.log(Weight(2))
///////////////////////////////////////////////////////////////
                //oF = (oC x 9/5) + 32
function Temp(c){
    let F=(c*(9/5))+32
    return F
}
console.log(Temp(95))
////////////////////////////////////////////////////////////////
function bmi(weight,height){
   let BMI =weight/(height*height)
   
   if(BMI<18.5){
    console.log("UnderWeight")
   }
    else if(BMI>18.5 && BMI<24.5){
        console.log("Normal Weight")
    }
    else if(BMI>25 && BMI<29.9){
        console.log("Over Weight")
    }
   else{
    console.log("Obese")
   }
}bmi(30,1)
////////////////////////////////////////////////////////
function ChckSeason(month){
    if (month=='January'|| month=='December')
      {console.log("Winter")}
    else if(month=='March'|| month=='April'|| month=='May')
      {console.log("Summer")}
    else if(month=='June'|| month=='July'|| month=='August')
        {console.log("Spring")}
    else
       {console.log("Autumn")}
}
ChckSeason('November')
/////////////////////////////////////////////
function findMax(n1,n2,n3){
  let max=n1
  if(max<n2){
    max=n2
    
  }
  if(max<n3)
    max=n3
  return max
  
}
console.log(findMax(1,2,5))
//////////////////////////////////////////////////////////////////////
function PrintArray(array){
   for(const element of array){
    console.log(element)
   }
}
PrintArray(['anu','binu'])
////////////////////////////////////////////////////////////////
function swapValues(a,b){
 let x=0
 x=a
 a=b
 b=x
   console.log("Value of a & b:",a,b)
}
swapValues(3,4)
//////////////////////////////////////////////////////////
function reverseArray(array){
 newArr=[]
 for(let i=array.length-1;i>-1;i--)
 {
    newArr.push(array[i])
   
 }
  return newArr
}
console.log(reverseArray([1,2,3,4,5]))
///////////////////////////////////////////////////////////////

function addItem(arr,item){
  arr.push(item)
  return arr
}
console.log(addItem([1,2,3,4,5],6))
////////////////////////////////////////////////////////
function Capital(arr){
  newArr=[]
  for(const item of arr){
    newArr.push(item.toUpperCase())
  }
  return newArr
}
console.log(Capital(['anu','binu','manu']))
//////////////////////////////////////////////////////////
function removeItem(arr,item){
   let i=arr.indexOf(item)
   arr.splice(i,1)
   return arr
}
console.log(removeItem([1,2,3,4,5],4))
///////////////////////////////////////////////////////
function SumNumber(num){
   sum=0
   for(let i=0;i<num+1;i++){
    sum=sum+i
   }
   return sum
}
console.log(SumNumber(5))
///////////////////////////////////////////////////////
function SumOdd(num){
   sum=0
   for(let i=1;i<num+1;i=i+2){
     sum=sum+i
   }
   return sum
}
console.log(SumOdd(5))
////////////////////////////////////////////////////
function SumEven(num){
    sum=0
    for(let i=0;i<num+1;i=i+2){
      sum=sum+i
    }
    return sum
}
console.log(SumEven(5))
////////////////////////////////////////////////////
function evenAndOdd(num){
  countOdd=0
  countEven=0
  for(let i=1;i<num+1;i=i+2){
    countOdd=countOdd+1
  }
  
  for(let i=0;i<num+1;i=i+2){
    countEven=countEven+1
  }
  return `no.of even numbers in 100 are ${countEven}`,`no.of odd numbers in 100 are ${countOdd}`;

}
console.log(evenAndOdd(100))
//////////////////////////////////////////////
function sumNum(...num){
  let sum=0
  for(const n of num){
    sum=sum+n
  }
  return sum
}
console.log(sumNum(1,2,3))
///////////////////////////////////////////////////
                      // LEVEL 3//////
function ArraySum(num){
   let sum=0
   for(const item of num ){
      if(!isFinite(item)){
          
          console.log(`The item '${item}' in the array is not number`)
           continue}
          
      sum=sum+item }
   return `sum of numbers in the array is ${sum}`
}
console.log(ArraySum([1,'ji',3]))   
/////////////////////////////////////////////////////////
function average(num){
  let sum=0
  let avg=0
  for(const item of num){
    if(!isFinite(item))
      return `The item ${item} is not a number`
    else{
      
      sum=sum+item
      
    }
  }
     avg=sum/num.length
      return `Average of numbers is ${avg}`
}
console.log(average([8,2]))
////////////////////////////////////////////////////////////////////////////
function modifyArray(arr){
  
    for(let i=0;i<arr.length;i++){
       
       if(arr.length<5){
        return "Item not found"
       }
       arr[4]='apple'
       return arr

}
}
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))
///////////////////////////////////////////////////////////////////////////////
function duplicateArray(arr){
  for(const item of arr){
    if(arr.includes(item)){
       return `The item ${item} is a duplicate element`
    }
  }
}
console.log(duplicateArray([1,2,3,2]))
/////////////////////////////////////////////////////////////
function reverseArr(arr){
   newArr=[]
   for(let i=arr.length-1;i>=0;i--){
     let item=arr[i]
     newArr.push(item)
   }
   return newArr
}
console.log(reverseArr(['china','us','canada','dubai']))
////////////////////////////////////////////////
function randGene(){
arr=[]
 for(let i=0;i<7;i++){
   const randNum=Math.random()
   arr.push(randNum)
  }
  return arr
}
console.log(randGene())
