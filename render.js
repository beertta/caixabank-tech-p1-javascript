import { Character } from "./characters.js";

const head = (title) => `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <title>${title}</title>
</head>`;

const renderCharacters = (characters) => {
  let html = '<div class="grid-container">';
  for (const char of characters) {
    html += `
    <a href="detalle_${char.id}.html" target="_blank" class="card">
      <img src="${char.image}" alt="${char.name}" class="card-img" />
      <div class="card-name">${char.name}</div>
    </a>`;
  }
  html += '</div>';
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
   <header class="main-header">
        <img src="logo.png" alt="Logo Rick and Morty" class="main-logo">
    </header>
    ${renderCharacters(characters)}
  </body>
</html>`;
};