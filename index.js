"use strict"

const DIM = 4;

window.onload=function(){
   let rand = generaNumero();
   let rand1 = generaNumero();

   creaMat(rand,rand1);
   
}

function creaMat(rand,rand1){
   for(let i = 0;i < DIM; i++)
   {
      for(let j = 0; j < DIM; j++)
      {
         const div = document.createElement("div");
         div.classList.add("cella");
         if (i === rand && j === rand1) {
            div.textContent = "2";
        }
         


         wrapper.appendChild(div);
      }
   }
}

function generaNumero(min, max){
   return Math.floor((max - min) * Math.random()) + min;   
}