const PICTURES_URL = "http://localhost:3000/pictures";
const GUSTS_URL = "http://localhost:3000/guests";
const portafolio = document.querySelector("#portfolio_wrapper");
const formGuest = document.querySelector("#formGuest");

function updatePicBackEnd(pic) {
  return fetch(PICTURES_URL + `/${pic.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pic)
  }).then(resp => resp.json());
}

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

  // if (figure.id == "pic_1")
  //   figure.styleName =
  //     "position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;";
  // else if (figure.id == "pic_2")
  //   figure.styleName =
  //     "position: absolute; left: 0px; top: 0px; transform: translate3d(337px, 0px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;";
  // else if (figure.id == "pic_3")
  //   figure.styleName =
  //     "position: absolute; left: 0px; top: 0px; transform: translate3d(674px, 0px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;";
  // else if (figure.id == "pic_4")
  //   figure.styleName =
  //     "position: absolute; left: 0px; top: 0px; transform: translate3d(1011px, 0px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;";
  // else if (figure.id == "pic_5")
  //   figure.styleName =
  //     "position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 240px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;";
  // else if (figure.id == "pic_6")
  //   figure.styleName =
  //     "position: absolute; left: 0px; top: 0px; transform: translate3d(337px, 240px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;";
  // else if (figure.id == "pic_7")
  //   figure.styleName =
  //     "position: absolute; left: 0px; top: 0px; transform: translate3d(674px, 240px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;";
  // else if (figure.id == "pic_8")
  //   figure.styleName =
  //     "position: absolute; left: 0px; top: 0px; transform: translate3d(1011px, 240px, 0px) scale3d(1, 1, 1); width: 337px; opacity: 1;";

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

function getPics() {
  return fetch(PICTURES_URL).then(resp => resp.json());
}

formGuest.addEventListener("submit", e => {
  e.preventDefault();
  createGuestBackEnd(e);
});

function createGuestBackEnd(e) {
  const formFullName = document.querySelector("#formFullName");
  const formEmail = document.querySelector("#formEmail");
  const formAnswer = document.querySelector("#formAnswer");
  const formMessage = document.querySelector("#formMessage");

  newGuestName = formFullName.value;
  newGuestEmail = formEmail.value;
  newGuestMessage = formMessage.value;
  newGuestAnswer = formAnswer.value;

  const options = {
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
  };

  return fetch(GUSTS_URL, options)
    .then(resp => resp.json())
    .then(e.target.reset());
}

function init() {
  getPics().then(pics => renderPics(pics));
}

init();
