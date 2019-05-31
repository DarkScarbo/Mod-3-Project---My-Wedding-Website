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

function createGuestBackEnd(e, newGuest) {
  return fetch(GUESTS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newGuest)
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
