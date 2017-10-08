function dnum(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}

console.log(dnum(12));
console.log(dnum(19));
console.log(dnum(22));
