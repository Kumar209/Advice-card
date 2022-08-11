const adviceId=document.querySelector("p");
const advice= document.querySelector("h4");
const url ="https://api.adviceslip.com/advice";

fetch(url)
  .then((response) => response.json())
  .then(function(data){
    adviceId.innerText= "Advice #"+ data.slip.id;
    advice.innerText=data.slip.advice;
  });
