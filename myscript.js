function getText() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
  console.log(x);
}

function capitalize(){
	var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
  let count = x.length;
  let restOfWord;
  let capitalizedLetter;
  x = x.toUpperCase();
  capitalizedLetter = x.charAt(0);
  restOfWord = x.substring(1,x.length).toLowerCase();
  console.log(capitalizedLetter + restOfWord);
  document.getElementById("capitalizedText").innerHTML = (capitalizedLetter + restOfWord);
  
  
  return x;
}
