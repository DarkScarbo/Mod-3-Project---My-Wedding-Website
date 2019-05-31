const PICTURES_URL = "http://localhost:3000/pictures";
const GUESTS_URL = "http://localhost:3000/guests";
const HOSTS_URL = "http://localhost:3000/hosts";
const EVENTS_URL = "http://localhost:3000/events";
const WEDDING_URL = "http://localhost:3000/weddings/1";

const portafolio = document.querySelector("#portfolio_wrapper");
const formGuest = document.querySelector("#formGuest");
const personOneName = document.querySelector("#person_one_name");
const personOneHobbies = document.querySelector("#person_one_hobbies");
const personOneImage = document.querySelector("#person_one_image");
const personOneDetails = document.querySelector("#person_one_details");
const personTwoName = document.querySelector("#person_two_name");
const personTwoImage = document.querySelector("#person_two_image");
const personTwoDetails = document.querySelector("#person_two_details");
const personHobbies = document.querySelectorAll(".person_hobbies");

//Hosts//
function renderHobbie(hobbie, personHobbies) {
  const hobbie_li = document.createElement("li");
  hobbie_li.className = "points";
  hobbie_li.innerText = hobbie;
  personHobbies.appendChild(hobbie_li);
}

function renderHosts(hosts) {
  personOneName.innerText = hosts[0].host_name;
  personOneImage.src = hosts[0].host_img_url;
  personOneDetails.innerHTML = hosts[0].host_details;
  hosts[0].host_hobbies
    .split(". ")
    .forEach(hobbie => renderHobbie(hobbie, personHobbies[0]));

  personTwoName.innerText = hosts[1].host_name;
  personTwoImage.src = hosts[1].host_img_url;
  personTwoDetails.innerHTML = hosts[1].host_details;
  hosts[1].host_hobbies
    .split(". ")
    .forEach(hobbie => renderHobbie(hobbie, personHobbies[1]));
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
}

init();
