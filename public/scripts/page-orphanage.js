const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create map
const map = L.map("mapid", options).setView([lat, lng], 15);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create and add marker
L.marker([lat, lng], { icon }).addTo(map);

// Image gallery

function selectImage() {
  const button = event.currentTarget

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  function removeActiveClass(button) {
    button.classList.remove("active");
  }
  buttons.forEach(removeActiveClass)

  //selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagem
  imageContainer.src = image.src

  //Adicionar a classe .active para este botão
  button.classList.add("active")
}
