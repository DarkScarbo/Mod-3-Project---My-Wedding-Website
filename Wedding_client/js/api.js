//Events//

function getEvents() {
  return fetch(EVENTS_URL).then(resp => resp.json());
}

//Weeding//

function getWeedingInformation() {
  return fetch(WEDDING_URL).then(resp => resp.json());
}

//Hosts//

function getHosts() {
  return fetch(HOSTS_URL).then(resp => resp.json());
}

//Guest//

function createGuestBackEnd(e) {
  const formFullName = document.querySelector("#formFullName");
  const formEmail = document.querySelector("#formEmail");
  const formAnswer = document.querySelector("#formAnswer");
  const formMessage = document.querySelector("#formMessage");

  newGuestName = formFullName.value;
  newGuestEmail = formEmail.value;
  newGuestMessage = formMessage.value;
  newGuestAnswer = formAnswer.value;

  return fetch(GUESTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      guest_full_name: newGuestName,
      guest_attending: newGuestAnswer,
      guest_message: newGuestMessage,
      guest_email: newGuestEmail
    })
  })
    .then(resp => resp.json())
    .then(e.target.reset());
}

//Pics//

function getPics() {
  return fetch(PICTURES_URL).then(resp => resp.json());
}

function updatePicBackEnd(pic) {
  return fetch(PICTURES_URL + `/${pic.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pic)
  }).then(resp => resp.json());
}
