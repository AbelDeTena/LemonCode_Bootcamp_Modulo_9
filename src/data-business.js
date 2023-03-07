import { createCharacterRow, showCharacter } from "./utils.js";
export { datos, sumarPagina, restarPagina };

var root = document.getElementById("root");
var detail = document.getElementById("character-detail");

var pagina = "1";
//Sumar pagina
function sumarPagina() {
  if (pagina < 42) pagina++;
  datos();
}
//Restar pagina
function restarPagina() {
  if (pagina > 1) pagina--;
  datos();
}

//Cargar personajes de la pagina 1.
const datos = async () => {
  await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
    .then((resolve) => resolve.json())
    .then((resolve) => {
      var characters = resolve.results;
      root.textContent = "";
      for (const character of characters) {
        const element = createCharacterRow(character);
        root.append(element);
        //EXTRA
        //Obtener los detalles de los personajes
        element.addEventListener("click", () => detalles(character.id));
        // RETO
        //Mostrar por consola los episodios en los que aparacere el personaje seleccionado, consultando otro endpoint.
        for (let i = 1; i < 4; i++) {
          element.addEventListener("click", () => episodios(i, character.id));
        }
      }
    })
    .catch((err) => console.error("Error: " + err));
};

//Cargar los detalles de personaje
const detalles = async (id) => {
  await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((resolve) => resolve.json())
    .then((resolve) => {
      var character = resolve;
      console.log(character.name);
      const element = showCharacter(character);
      detail.append(element);
    })
    .catch((err) => console.error("Error: " + err));
};

//Listado de episodios
const episodios = async (page, id) => {
  await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
    .then((resolve) => resolve.json())
    .then((resolve) => {
      var episodios = resolve.results;
      for (const episodio of episodios) {
        for (const aparicion of episodio.characters) {
          if (aparicion === `https://rickandmortyapi.com/api/character/${id}`) {
            console.log(episodio.id, episodio.name);
          }
        }
      }
    });
};
