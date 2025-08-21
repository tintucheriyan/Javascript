let num=3
if (num>0){
    console.log(`${num} is greater than 0`)

}

let IsRaining=true
if (IsRaining)
{
    console.log('Remember to take your Rain coat')
}
//////////////////////////////////////////////////////////////
let numb=-3
if(numb>0){
    console.log(`${numb} is a positive number`)
}
else{
    console.log(`${numb} is a negative number`)
}
/////////////////////////////////////////////////////////
let a=0
if (a>0){
    console.log(`${a} is a positive num`)}
else if(a<0){
   console.log(`${a} is a negative  number`)}
else if(a==0){
    console.log(`number is equal to 0`)
}
else{
    console.log(`${a} is not a number`)
}
////////////////////////////////////////////////////////
let weather='cloudy'
if(weather==='Rainy'){
    console.log("Need to carry Raincoat")}
else if(weather==='sunny'){
    console.log("Weather is good")
}
else if(weather==='cloudy'){
    console.log("Better to take rain coat")
}
else{
    console.log("Need to take a jacket")
}
//////////////////////////////////////////////////////////
let climate='winter'
switch(climate){
    case 'rainy':
        console.log("you need a rain coat")
        break
    case 'cloudy':
        console.log("bettr to take an umbrella")
        break
    case 'sunny':
        console.log('It is good weather')
        break
    default:
        console.log("you need to take a jacket")
}
//////////////////////////////////////////////////////////////////
let input= prompt("what is the day?")
let day=input.toLowerCase()
switch(day){
    case 'monday':
        console.log("It is monday")
        break
    case 'tuesday':
        console.log("It is Tuesday")
        break
    case 'wednesday':
        console.log("It is wednesday")
        break
    case 'thursady':
        console.log("it is thursady")
        break
    case 'friday':
        console.log("it is friday")
        break
    case 'saturday':
        console.log("it is saturday")
        break
    case 'sunday':
        console.log("it is sunday")
        break
    default:
        console.log("it is not a weekday")

}