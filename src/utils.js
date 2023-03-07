export { createCharacterRow, showCharacter };

//Crear columna de personajes
const createCharacterRow = (character) => {
  const element = document.createElement("div");

  const avatar = createAvatar(character);
  element.appendChild(avatar);

  const link = createRowText(character);
  element.appendChild(link);

  element.className = "character-row";

  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.image;

  return element;
};

const createRowText = (character) => {
  const element = document.createElement("span");
  element.append(character.name);

  return element;
};

//Crear los detalles del personajes
const showCharacter = (character) => {
  // console.log("character", character);
  const characterDetail = document.getElementById("character-detail");

  characterDetail.innerHTML = "";
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph("Name: " + character.name));
  characterDetail.appendChild(createParagraph("Status: " + character.status));
  characterDetail.appendChild(createParagraph("Species: " + character.species));
};

const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.width = 350;
  element.src = character.image;

  return element;
};

const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};
