'use strict';

window.addEventListener('DOMContentLoaded', () => {
   sortPrice();
});

function sortPrice(){
   const itemList = document.querySelector('.sort__list'),
         btnLow = document.querySelector('.sort__btn-low'),
         btnHigh = document.querySelector('.sort__btn-high'),
         btnClear = document.querySelector('.sort__btn-clear');

   function sortLow(){
      for(let i = 0; i < itemList.children.length; i++){
         for(let j = i; j < itemList.children.length; j++){
            if(+itemList.children[i].getAttribute('data-price') > +itemList.children[j].getAttribute('data-price')){

               let replacedNode = itemList.replaceChild(itemList.children[j], itemList.children[i]);
               insertAfter(replacedNode, itemList.children[i]);

            }
         }
      }
   }

   function sortHigh(){
      for(let i = 0; i < itemList.children.length; i++){
         for(let j = i; j < itemList.children.length; j++){
            if(+itemList.children[i].getAttribute('data-price') < +itemList.children[j].getAttribute('data-price')){

               let replacedNode = itemList.replaceChild(itemList.children[j], itemList.children[i]);
               insertAfter(replacedNode, itemList.children[i]);

            }
         }
      }
   }

   function sortArticul(){
      for(let i = 0; i < itemList.children.length; i++){
         for(let j = i; j < itemList.children.length; j++){
            if(+itemList.children[i].getAttribute('data-articul') > +itemList.children[j].getAttribute('data-articul')){

               let replacedNode = itemList.replaceChild(itemList.children[j], itemList.children[i]);
               insertAfter(replacedNode, itemList.children[i]);

            }
         }
      }
   }

   function insertAfter(elem, refElem){
      return itemList.insertBefore(elem, refElem.nextSibling);
   };

   btnLow.addEventListener('click', () => {
      sortLow();
   });

   btnHigh.addEventListener('click', () => {
      sortHigh();
   });

   btnClear.addEventListener('click', () => {
      sortArticul();
   });
};



