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
    return dataTableRestau;

  }

  catch (error) {

    console.error(error);

  }

};

async function fetchApiService() {

  try {

    const response = await fetch("http://localhost:1337/api/services?populate=*");

    if (!response.ok) {

      throw new Error("Could not fetch resource");

    }

    const dataTableService = await response.json();
    return dataTableService;

  }

  catch (error) {

    console.error(error);

  }

};

//================================================================================================================================================================================================
// Info: Synchronisation des data dans des constantes
//================================================================================================================================================================================================

let globalDataChambre;
let globalDataRestau;
let globalDataService;

fetchApiChambre().then(data => {

  globalDataChambre = data;
  afficherDataChambre(globalDataChambre);

});

fetchApiRestau().then(data => {

  globalDataRestau = data;
  afficherDataRestau(globalDataRestau);

});

fetchApiService().then(data => {

  globalDataService = data;
  afficherDataService(globalDataService);

});

//================================================================================================================================================================================================
// Info: Fonction pour afficher la data des l'API
//================================================================================================================================================================================================

function afficherDataChambre(dataa) {

  const afficherChambre = document.getElementById("chambre");
  afficherChambre.innerHTML = '';

  dataa.data.forEach(user => {

    afficherChambre.innerHTML +=
      `<div class="w-[95%] my-6 bg-[${user.color}] shadow-2xl rounded-xl">
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
                <h2 class="mb-1 text-4xl font-medium text-pink-500">${user.price}€</h2>
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
      `<div class="lg:w-[35%]">
        <div class="sm:container md:container p-6 my-6 mb-0 mx-auto">
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

function afficherDataService(dataa) {

  const afficherService = document.getElementById("service");
  afficherService.innerHTML = '';

  dataa.data.forEach(user => {

    afficherService.innerHTML +=
      `<div class="lg:w-[35%]">
        <div class="sm:container md:container p-6 my-6 mb-0 mx-auto">
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

//================================================================================================================================================================================================
// Info: Modification du burger menu de Flowbite pour qu'il soit a droite de force
//================================================================================================================================================================================================


const sideBar = document.getElementById("logo-sidebar");
const buttonHamb = document.getElementById("menu");

setTimeout(() => {

  sideBar.classList.add('right-0');
  sideBar.classList.remove('left-0');
  sideBar.classList.remove('hidden');

}, 100);


setInterval(() => {

  sideBar.classList.remove('-translate-x-full');

}, 2);

//================================================================================================================================================================================================
// Info: Fonction pour les confettis coeur
//================================================================================================================================================================================================

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

//================================================================================================================================================================================================
// Info: Fonction pour le logo qui retourne tout en haut de la page en cliquant dessus
//================================================================================================================================================================================================

let buttonPalais = document.getElementById("ButtonPalais");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

buttonPalais.addEventListener("click", topFunction);