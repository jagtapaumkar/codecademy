let userName='aumkar';
userName?console.log(`hello,${userName}`): console.log(`hello!`);

userQuestion="will i get a job of 15LPA?";

console.log(`${userName} has asked ${userQuestion}`);

randomNumber=Math.floor(Math.random() * 8);
console.log(randomNumber)

let eightBall='';

switch(randomNumber){
case 0:
eightBall='It is certain';
break;
case 1:
eightBall='It is decidedly so' ;
break;
case 2:
eightBall='Reply hazy try again' ;
break;
case 3:
eightBall='Cannot predict now' ;
break;
case 4:
eightBall= 'Do not count on it';
break;
case 5:
eightBall='My sources say no' ;
break;
case 6:
eightBall='Outlook not so good' ;
break;
case 7:
eightBall= 'Signs point to yes';
break;
}
console.log(`${userName} the magic eight ball say 
 ${eightBall}`)
