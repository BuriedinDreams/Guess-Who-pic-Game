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
    <div> class="imgOfPerson" 
    <img src="https://github.com/ data-index"${peopleName}"?size=250" alt="Profile image of data-index"${peopleName}">
    </div>
    `);
  }
}
