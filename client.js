console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  console.log('Inside jQuery');

  profilePics();
}

function profilePics(people) {
  $('.imgOfPeople').append(`
  <div class="pics">
  <img src="./profilePictures/DustyM.png" alt="Image of Dusty" sizes="250">
  </div class="pics">
  <div>
  <img src="./profilePictures/JohnS.png" alt="Image of John" sizes="250" id="John">
  </div class="pics">
  <div>
  <img src="./profilePictures/JoshG.png" alt="Image of Josh" sizes="250" >
  </div class="pics">
  <div class="pics">
  <img src="./profilePictures/McKynlee.png" alt="Image of McKynlee" sizes="250">
  </div>
  <img src="./profilePictures/PatrickN.png" alt="Image of Patrick" sizes="250">
  <div class="pics">
  <img src="./profilePictures/Vada.png" alt="Image of Vada" sizes="250">
  </div>
  <div class="pics">
  <img src="./profilePictures/WilliamKrug.png" alt="Image of William" sizes="250">
  </div>
  `);
}
