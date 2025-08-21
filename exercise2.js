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
function prime(num){
 for(let num=0;num<50 ||num==50;num++)
  if(num<2){
    return 'Not prime'}
  if (num==2){
    return 'prime'}
 
  else{
    for(let i=2;i<(num**0.5)+1;i+=1){
        if(num%i==0)
           return `Not prime'
    }     
    return 'prime' 
    }  
}
console.log(prime(6))
///////////////////////////////////////////////////////////////////////