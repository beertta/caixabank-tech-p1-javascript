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
    <div class="character">
      <img src="${char.image}" width="100" />
      <div class="data">
        <div class="name"><strong>${char.name}</strong></div>
        <div class="info">${char.species} - ${char.status}</div>
      </div>
      <hr>
    </div>`;
  }
  return html;
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