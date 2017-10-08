//with user input

//year = window.prompt("Input a Year : "); 

//without user input

year = 2004; 
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(x);
