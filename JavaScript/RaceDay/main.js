let raceNumber = Math.floor(Math.random() * 1000);

let early=false;
let age =18;
if(early && age>18){
  raceNumber+= 1000;
}

if(early && age>18){
  console.log(`The race will begin at 9:30am, your race number is ${raceNumber}.`)
}
else if(!early && age>18){
  console.log (`The race will begin at 11:00am, your race number is ${raceNumber}.`)
}
else if( age<18){
  console.log(`The race will beginat 12:30, your race number is ${raceNumber}`)
}
else{
  console.log(`Runners to see the registration desk`)
}
