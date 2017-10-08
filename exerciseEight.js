 var num = Math.ceil(Math.random() * 10);
 var guessNum = prompt('Guess the number between 1 and 10');
 if (guessNum == num)
   console.log('Match');
  else
   console.log('No match, number was ' + num);
   