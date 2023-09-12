document.querySelector(".control-buttons span").onclick = function () {

   let YourName = prompt("Whats Your Name?") ;
//    console.log(YourName );
   if (YourName == "" || YourName == null ) {
    document.querySelector(".name span").innerHTML = 'unKown';

   } else {
    document.querySelector(".name span").innerHTML = YourName;
  
   }
   document.querySelector(".control-buttons").remove();
}
let deration = 1000 ;
let BlockesContainer = document.querySelector(".container-image");
let Blockes = Array.from(BlockesContainer.children);

let orderRange = [...Array(Blockes.length).keys()];



shuffle(orderRange);


Blockes.forEach((block , index) => {
   block.style.order =  orderRange[index];

   block.addEventListener('click', function () {
      flipBlock(block);
   })
});

function flipBlock(selectedBlock) {
   selectedBlock.classList.add('is-flipped');

   let allFlippedBlocks = Blockes.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));
   if (allFlippedBlocks.length === 2) {
     stopClicking() ;
     checkMatchedBlockes(allFlippedBlocks[0], allFlippedBlocks[1]) ;
   }


}

function stopClicking() {
   BlockesContainer.classList.add('no-clicking');
   setTimeout(() => {
      BlockesContainer.classList.remove('no-clicking');
   },deration)
}
function checkMatchedBlockes(firstBlock , scondBlock) {

   let triesElement = document.querySelector('.tries span');

if (firstBlock.dataset.thechnology === scondBlock.dataset.thechnology) {
   firstBlock.classList.remove('is-flipped');
   scondBlock.classList.remove('is-flipped');
   firstBlock.classList.add('has-match');
   scondBlock.classList.add('has-match');
   document.getElementById("seccess").play();



} else {
   triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

setTimeout(() => {
   firstBlock.classList.remove('is-flipped');
   scondBlock.classList.remove('is-flipped');
},deration)

document.getElementById("fail").play();


}

}

function shuffle(array) {
   let current = array.length,
        temp,
        random;

   while (current > 0) {
      random = Math.floor(Math.random() * current);

      current--;
 
      temp = array[current];

      array[current] = array[random];

      array[random] = temp;
   }
   return array
}