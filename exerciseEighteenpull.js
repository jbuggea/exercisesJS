function testnum(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(testnum(50, 50))
console.log(testnum(40, 50))
console.log(testnum(40, 20))
console.log(testnum(20, 30))
