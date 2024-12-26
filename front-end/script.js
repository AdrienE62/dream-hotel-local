//================================================================================================================================================================================================
// Info: Récuperation des l'API
//================================================================================================================================================================================================

async function fetchApiChambre() {

  try {

    const response = await fetch("http://localhost:1337/api/chambres?populate=*");

    if (!response.ok) {

      throw new Error("Could not fetch resource");

    }

    const dataTableChambre = await response.json();
    console.log(dataTableChambre);
    return dataTableChambre;

  }

  catch (error) {

    console.error(error);

  }

};

async function fetchApiRestau() {

  try {

    const response = await fetch("http://localhost:1337/api/restaurations?populate=*");

    if (!response.ok) {

      throw new Error("Could not fetch resource");

    }

    const dataTableRestau = await response.json();
    console.log(dataTableRestau);
    return dataTableRestau;

  }

  catch (error) {

    console.error(error);

  }

};

//================================================================================================================================================================================================
// Info: Synchronisation data dans des constantes
//================================================================================================================================================================================================

let globalDataChambre;
let globalDataRestau;

fetchApiChambre().then(data => {

  globalDataChambre = data;
  afficherDataChambre(globalDataChambre);

});

fetchApiRestau().then(data => {

  globalDataRestau = data;
  afficherDataRestau(globalDataRestau);

});

//================================================================================================================================================================================================
// Info: Fonction pour afficher la data de l'API en random avec animation
//================================================================================================================================================================================================

function afficherDataChambre(dataa) {

  const afficherChambre = document.getElementById("chambre");
  afficherChambre.innerHTML = '';

  dataa.data.forEach(user => {

    afficherChambre.innerHTML +=
      `<div class="w-full bg-[${user.color}]">
        <div class="container p-6 mx-auto">
          <div class="overflow-hidden bg-[#E6E6FA] rounded-lg shadow-lg">
            <div class="lg:flex">
              <div class="lg:w-1/2">
                <img src="http://localhost:1337${user.image.formats.large.url}" alt="Présentation" class="object-cover w-full h-full">
              </div>
              <div class="p-6 lg:w-1/2">
                <h2 class="mb-4 text-3xl font-bold">${user.titre}
                </h2>
                <p class="lg:mb-96 mb-4 text-black">${user.description}
                </p>
                <h2 class="mb-1 text-4xl font-medium text-green-400">${user.price}€</h2>
              </div>
            </div>
          </div>
        </div>
      </div>`;

  });

};

function afficherDataRestau(dataa) {

  const afficherRestau = document.getElementById("restau");
  afficherRestau.innerHTML = '';

  dataa.data.forEach(user => {

    afficherRestau.innerHTML +=
      `<div class="lg:w-1/2">
        <div class="container p-6 my-6 mb-0 mx-auto">
          <div class="overflow-hidden bg-[#E6E6FA] rounded-lg shadow-lg">
            <div class="">
              <div class="">
                <img src="http://localhost:1337${user.image.formats.large.url}" alt="Présentation"
                  class="object-cover w-full h-full">
              </div>
              <div class="p-6">
                <h2 class="mb-4 text-3xl font-bold">${user.titre}
                </h2>
                <p class="mb-4 text-black">${user.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>`;

  });

};



const sideBar = document.getElementById("logo-sidebar");
const buttonHamb = document.getElementById("menu");

setTimeout(() => {

  sideBar.classList.add('right-0');
  sideBar.classList.remove('left-0');
  sideBar.classList.remove('hidden');

}, 40);


setInterval(() => {

  sideBar.classList.remove('-translate-x-full');

}, 1);

function loveexplosion() {

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };

  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });

  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });

};

loveexplosion();

let buttonPalais = document.getElementById("ButtonPalais");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

buttonPalais.addEventListener("click", topFunction);