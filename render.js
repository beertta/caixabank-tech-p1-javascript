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
  ${head("Detall de " + char.name)}
  <body class="detail-page">
    <div class="detail-container">
      <a href="index.html" class="back-rocket">
        <img src="images/rocket.png" alt="Tornar" />
      </a>

      <div class="detail-card">
        <div class="char-image-wrapper">
          <img src="${char.image}" alt="${char.name}" />
        </div>
        
        <div class="detail-info">
          <h1>${char.name}</h1>
          
          <div class="stats-grid">
            <div class="stat-label">State:</div>
            <div class="stat-value">${char.status}</div>
            
            <div class="stat-label">Species:</div>
            <div class="stat-value">${char.species}</div>
            
            <div class="stat-label">Origin:</div>
            <div class="stat-value">${char.originName}</div>
          </div>
        </div>
      </div>
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
        <img src="images/logo.png" alt="Logo Rick and Morty" class="main-logo">
    </header>
    ${renderCharacters(characters)}
  </body>
</html>`;
};