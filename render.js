import { Character } from "./characters.js";

const head = (title) => `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>`;

const renderCharacters = (characters) => {
  let html = "";
  for (const char of characters) {
    html += `
    <a href="detalle_${char.id}.html" target="_blank" class="card">
      <img src="${char.image}" width="100" />
      <div class="data">
        <div class="name"><strong>${char.name}</strong></div>
        <div class="info">${char.species} - ${char.status}</div>
      </div>
      <hr>
    </a>`;
  }
  return html;
}

export const renderDetail = (char) => {
  return `
<!DOCTYPE html>
<html lang="es">
  ${head("Detalle de " + char.name)}
  <body>
    <a href="index.html">← Volver a la lista</a>
    <h1>${char.name}</h1>
    <img src="${char.image}" width="300" />
    <div class="details">
      <p><strong>Estado:</strong> ${char.status}</p>
      <p><strong>Especie:</strong> ${char.species}</p>
      <p><strong>Origen:</strong> ${char.originName}</p>
    </div>
  </body>
</html>`;
}

export const render = (characters) => {
  return `
<html>
  ${head("Lista Rick & Morty")}
  <body>
    <h1>Personajes</h1>
    ${renderCharacters(characters)}
  </body>
</html>`;
};