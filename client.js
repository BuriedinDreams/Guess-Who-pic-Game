console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
  console.log('Inside jQuery');

  profilePics(people);
}

function profilePics(param) {
  let peopleName = $(param).data('param.name');

  // I need to append people from the people array-people.
  for (let people of param) {
    $('.imgOfPeople').append(`
    <div id="">
    <img src="https://github.com/${people.githubUsername}.png?size=250" alt="Profile image of ${people.name}">
    </div>
    `);
  }
}
