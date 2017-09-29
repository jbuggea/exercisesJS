var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var timeofday = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && timeofday===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  timeofday=' Noon';
  } 
  else
  { 
  hour=12;
  timeofday=' PM';
  } 
  } 
  if (hour===0 && timeofday===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  timeofday=' Midnight';
  } 
  else
  { 
  hour=12;
  timeofday=' AM';
  } 
  } 
console.log("Current Time : "+hour + timeofday + " : " + minute + " : " + second);

