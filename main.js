import { writeFile } from "fs/promises";
import { render, renderDetail} from "./render.js";
import { loadCharacters } from "./characters.js";


const characters = await loadCharacters(20);
const html = render(characters);
await writeFile('index.html', html);

for (const char of characters) {
  const htmlDetail = renderDetail(char);
  await writeFile(`detalle_${char.id}.html`, htmlDetail);
}
