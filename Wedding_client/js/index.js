const PICTURES_URL = "http://localhost:3000/pictures";
const GUESTS_URL = "http://localhost:3000/guests";
const HOSTS_URL = "http://localhost:3000/hosts";
const EVENTS_URL = "http://localhost:3000/events";
const WEDDING_URL = "http://localhost:3000/weddings/1";

const portafolio = document.querySelector("#portfolio_wrapper");

const formGuest = document.querySelector("#formGuest");

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

const weddingNames = document.querySelector(".names");
const weddingDateLocation = document.querySelector("#date_location");
const weddingAboutUs = document.querySelector("#about_us");
const weddingHostsAdress = document.querySelector("#address");

//Wedding//



//Hosts//
function renderHobbie(hobbie, hostHobbies) {
  const hobbie_li = document.createElement("li");
  hobbie_li.className = "points";
  hobbie_li.innerText = hobbie;
  hostHobbies.appendChild(hobbie_li);
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

formGuest.addEventListener("submit", e => {
  e.preventDefault();
  createGuestBackEnd(e);
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

  portafolio.append(figure);

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
  getWeedingInformation(weddingInformation => renderWeddingInformation(weddingInformation))
}

init();
