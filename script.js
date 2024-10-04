const btn = document.getElementById("btn");
const result = document.getElementById("result");
const heading = document.getElementById("heading");

let apiKey = 'AIzaSyAflbYBXyzWcrEdLd3MCaORrjX7TpPxEvY';
let apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`;

btn.addEventListener("click", () => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        result.innerHTML = "";
        data.items.forEach(font => {
            const fontItem = document.createElement("div");
            fontItem.innerHTML = `<strong>${font.family}</strong> - Category: ${font.category}`;
            result.appendChild(fontItem);

            fontItem.addEventListener("click", () => {
                const fontLink = document.createElement("link");
                fontLink.href = `https://fonts.googleapis.com/css2?family=${font.family.replace(/ /g, '+')}&display=swap`;
                fontLink.rel = "stylesheet";
                
                document.head.appendChild(fontLink);
                heading.style.fontFamily = font.family;
            });
        });
    })
    .catch(error => console.error('Error fetching Google Fonts data', error));
});
