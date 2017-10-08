var str = "w3resource";
var str1 ="";

var len = str.length;

var j = len - 1;

for (var i = 0; i < len; i++) {
	//console.log(str.length);
	var str2 = str[j];
	console.log(str2);
	str = str.slice(0, -1);
	console.log(str);
	// j--;
	str = str2+str;
	document.write(str);
}
