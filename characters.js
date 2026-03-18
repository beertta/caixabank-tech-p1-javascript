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

export const loadCharacters = async (n) => {

  let idsArray = [];

  for (let i = 1; i <= n; i++) {
    idsArray.push(i);
  }

  const ids = idsArray.join(',');

  const response = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
  const results = await response.json();

  const characters = [];

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