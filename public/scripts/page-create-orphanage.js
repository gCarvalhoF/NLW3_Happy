//create map
const map = L.map("mapid").setView([-12.8931557, -38.4119951], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remover icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add new photo field
function addPhotoField() {
  //pegar o container de fotos
  const container = document.querySelector("#images");

  //pegar o container para duplicar .new-image
  const fieldsContainer = container.querySelectorAll(".new-upload");

  //realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //limpar o campo
  input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  } else {
    newFieldContainer.children[0].value = "";
  }

  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

// remove photo field
function removePhotoField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // Apagar o campo
  span.parentNode.remove();
}

// seleção do sim e não
function toggleSelect(event) {
  // Retirar a classe .active dos botões
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  // Colocar a classe .active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // Atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}

function validate(event) {
  if (document.querySelector('[name="lat"]').value == '') {
    event.preventDefault();
    alert('Selecione um ponto no mapa')
  }
  
}