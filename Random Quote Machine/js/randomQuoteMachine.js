//Function to randomize quotes and authors
function randomize(){
  jSonSize = rQuotes.length-1;
  //console.log(jSonSize);
  x = Math.round(Math.random()*jSonSize);
  //console.log(x);
  document.getElementById("quote").innerHTML = rQuotes[x]["quote"];
  document.getElementById("author").innerHTML = rQuotes[x]["author"];
};

//function to transition text fade
// function slideShow(){
//   console.log("Element changed");
// }
//
// function c(){
//   console.log("click");
// }


/*
carregar a função no inicio do carregamento da página
para que o CSS do quote passe da opacidade 0 para 1

fazer com que ao apertar o botão 'generate' e a nova 'quote' seja carregada
e o processo acima se repita: que a opacidade do 'quote' passe de 0 para 1.

1. Uma função que faça a transição de 0 para 1 (slideShow()).
2. Chamar a função no carregamento da pagina.
3. Chamar a nova frase ao apertar o botão generate (função randomize(), gera no quote).
4. *Ao carregar a nova frase* chamar a função de transição (slideShow()).


*/
