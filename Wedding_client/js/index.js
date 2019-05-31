//URL consts//

const PICTURES_URL = "http://localhost:3000/pictures";
const GUESTS_URL = "http://localhost:3000/guests";
const HOSTS_URL = "http://localhost:3000/hosts";
const WEDDING_URL = "http://localhost:3000/weddings/1";
const EVENTS_URL = "http://localhost:3000/events";

//Dom consts//
const pictures = document.querySelector("#portfolio_wrapper");

const guestForm = document.querySelector("#guest_form");

const hostOneName = document.querySelector("#host_one_name");
const hostOneHobbies = document.querySelector("#host_one_hobbies");
const hostOneImage = document.querySelector("#host_one_image");
const hostOneDetails = document.querySelector("#host_one_details");
const hostOnePhone = document.querySelector("#phone_one");
const hostOneEmail = document.querySelector("#email_one");
const hostTwoName = document.querySelector("#host_two_name");
const hostTwoImage = document.querySelector("#host_two_image");
const hostTwoDetails = document.querySelector("#host_two_details");
const hostHobbies = document.querySelectorAll(".host_hobbies");
const hostsPhones = document.querySelector("#phones");
const hostsEmails = document.querySelector("#emails");

const weddingNames = document.querySelector("#names");
const weddingDateLocation = document.querySelector("#date_location");
const weddingAboutUs = document.querySelector("#about_us");
const weddingHostsAdress = document.querySelector("#address");

const events = document.querySelector("#events");

//Events//

function renderEvent(event) {
  const eventDiv = document.createElement("li");
  eventDiv.className = "col-md-3"

  const [descriptionLineOne, descriptionLineTwo, descriptionLineThree] = event.event_description.split("? ")

  eventDiv.innerHTML = `
  <div class="service_icon delay-03s animated wow  zoomIn"> <span><i class="fa fa-${event.event_icon}"></i></span> </div>
          <div class="service_block">
            
            <h3 class="animated fadeInUp wow">${event.event_title}</h3>
<p class="animated fadeInDown wow">${descriptionLineOne}<a href=${event.event_link_url} target="_blank">${descriptionLineTwo}  </a>${descriptionLineThree}</p>
          </div>`

  events.append(eventDiv)
}

function renderEvents(events) {
  events.forEach(event => renderEvent(event));
}

//Wedding//

function renderWeddingInformation(weddingInformation) {
  weddingNames.innerHTML = `We’re getting married!<br> <strong id="names">${weddingInformation.hosts_names}</strong>`
  weddingAboutUs.innerText = weddingInformation.about_us
  weddingDateLocation.innerText = weddingInformation.date_location

  const [addressLineOne, addressLineTwo, addressLineThree] = weddingInformation.hosts_address.split(". ")

  weddingHostsAdress.innerHTML = `${addressLineOne}</br>${addressLineTwo}</br>${addressLineThree}`
}

//Hosts//
function renderHobbie(hobbie, hostHobbies) {
  const hobbieLi = document.createElement("li");
  hobbieLi.className = "points";
  hobbieLi.innerText = hobbie;
  hostHobbies.appendChild(hobbieLi);
}

function renderHosts(hosts) {
  hostOneName.innerText = hosts[0].host_name;
  hostOneImage.src = hosts[0].host_img_url;
  hostOneDetails.innerHTML = hosts[0].host_details;
  hosts[0].host_hobbies.split(". ").forEach(hobbie => renderHobbie(hobbie, hostHobbies[0]));
  
  hostTwoName.innerText = hosts[1].host_name;
  hostTwoImage.src = hosts[1].host_img_url;
  hostTwoDetails.innerHTML = hosts[1].host_details;
  hosts[1].host_hobbies.split(". ").forEach(hobbie => renderHobbie(hobbie, hostHobbies[1]));

  hostsPhones.innerHTML = `${hosts[0].host_phone_number}<br>${hosts[1].host_phone_number}`
  hostsEmails.innerHTML = `${hosts[0].host_email}<br>${hosts[1].host_email}`
}

//Guests//

guestForm.addEventListener("submit", e => {
  const formFullName = document.querySelector("#formFullName");
  const formEmail = document.querySelector("#formEmail");
  const formAnswer = document.querySelector("#formAnswer");
  const formMessage = document.querySelector("#formMessage");

  const newGuest = {
    guest_full_name: formFullName.value,
    guest_attending: formEmail.value,
    guest_message: formMessage.value,
    guest_email: formAnswer.value
  }

  e.preventDefault();
  createGuestBackEnd(e, newGuest);
});

//Pics//

function renderPic(pic) {
  const figure = document.createElement("figure");
  figure.id = `pic_${pic.id}`;
  figure.className =
    "portfolio-item one-four appleIOS isotope-item effect-oscar";
  figure.innerHTML = `
  <div class="portfolio_img"> 
  <img src="${pic.img_url}"  alt="Portfolio 1"> </div> 
      <figcaption>		
          <div>
            <a href="${pic.img_url}" class="fancybox"> 
              <h2>${pic.img_title}</h2>
                      <p>${pic.img_description}</p>
    </a>
    <button id="like_button" name="button" class="btn btn-primary input-btn"> ${
      pic.img_likes
    } Likes!</button>
          </div>
      </figcaption>`;

  pictures.append(figure);

  const like_button = figure.querySelector("#like_button");
  like_button.addEventListener("click", e => {
    pic.img_likes++;
    updatePicBackEnd(pic).then(pic => updatePicFrontend(e, pic));
  });
}

function updatePicFrontend(e, pic) {
  e.target.innerText = `${pic.img_likes} LIKES!`;
}

function renderPics(pics) {
  pics.forEach(pic => renderPic(pic));
}

function init() {
  getPics().then(pics => renderPics(pics));
  getHosts().then(hosts => renderHosts(hosts));
  getWeedingInformation().then(weddingInformation => renderWeddingInformation(weddingInformation))
  getEvents().then(events => renderEvents(events))
}

init();
