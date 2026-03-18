// Definimos la clase de Personaje para que todos tengan la misma estructura
export class Character {
  constructor(id, name, status, species, image, origin) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.image = image;
    this.originName = origin.name;
  }

  get description() {
    return `${this.name} (${this.species} - ${this.status})`;
  }

}

// Función para cargar los personajes desde la API de forma asíncrona
export const loadCharacters = async (n) => {

  let idsArray = [];

  //Lista con los números de ID que queremos pedir
  for (let i = 1; i <= n; i++) {
    idsArray.push(i);
  }

  const ids = idsArray.join(',');

  // Petición a la API usando la lista de IDs generada
  const response = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
  const results = await response.json();

  const characters = [];

  // Recorremos los datos de la API para crear objetos de la clase Character
  for (const char of results) {
    characters.push(new Character(
      char.id, 
      char.name, 
      char.status, 
      char.species, 
      char.image, 
      char.origin
    ));
  }
  
  return characters;
};