import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadCharacters } from "./characters.js";


const characters = await loadCharacters(20);
const html = render(characters);
await writeFile('index.html', html);