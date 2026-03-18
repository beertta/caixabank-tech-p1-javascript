import { writeFile } from "fs/promises";
import { render, renderDetail} from "./render.js";
import { loadCharacters } from "./characters.js";

// Carga de los 54 personajes
const characters = await loadCharacters(54);

// Generamos y guardamos el archivo principal index.html
const html = render(characters);
await writeFile('index.html', html);

// Bucle para crear un archivo HTML individual por cada personaje
for (const char of characters) {
  const htmlDetail = renderDetail(char);
  await writeFile(`detalle_${char.id}.html`, htmlDetail);
}
