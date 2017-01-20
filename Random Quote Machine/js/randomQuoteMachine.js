function randomize(){
  jSonSize = rQuotes.length-1;
  //console.log(jSonSize);
  x = Math.round(Math.random()*jSonSize);
  console.log(x);
  document.getElementById("quote").innerHTML = rQuotes[x]["quote"];
  document.getElementById("author").innerHTML = rQuotes[x]["author"];
};
