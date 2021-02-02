console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  console.log('Inside jQuery');

  profilePics(people);

  // RandomNums( people )
  randomNumber(people)

}



function RandomNums(param){

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

}






  alert(
    ' Instructions: Choose one of the photos to see if you guessed the correct person by photo.'
  );

  // I need to append people from the people array-people.
  for (let people of param) {
    $('.imgOfPeople').append(`
    <div id="">
    <img src="https://github.com/${people.githubUsername}.png?size=250" alt="Profile image of ${people.name}">
    </div>
    `);
  }
}
