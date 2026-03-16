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
  
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const { results } = await response.json();
  
  const characters = [];

  for (const { id, name, status, species, origin, image } of results) {
    characters.push(new Character(id, name, status, species, image, origin));
  }
  
  return characters;
};

