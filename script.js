//Default color and scheme
const defaultColor = 'f55a5a'
const defaultMode = 'monochrome'

//Form submit and gets picked color without '#' for the API request
document.querySelector('#heading-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let pickedColor = document.querySelector('#color-picker').value.slice(1)
    let pickedScheme = document.querySelector('#scheme-picker').value
    
    fetchColors(pickedColor, pickedScheme)
}
)

//Creates specified number of columns inside color-container
function createColorColumns(columnCount) {
    const colorContainer = document.querySelector(`#color-container`)
    const footerContainer = document.querySelector(`footer`)

    for (let i = 0; i < columnCount; i++) {
        colorContainer.innerHTML += ` <div id="color-col"></div>`
        footerContainer.innerHTML += `<div id="footer-col"></div>`
    }
}

//Get color schemes with color codes from the API and fill the columns and footer with codes
function fetchColors(scheme, mode) {
    fetch(`https://www.thecolorapi.com/scheme?hex=${scheme}&mode=${mode}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json()})
    .then((data) => {

        updateColors(data)
    })
    .catch((error) => {
        // Handle the error here
        console.error('Error fetching color data:', error);
    });
}

// Fills columns and footer with colors, genrate color codes 
function updateColors(colorData){
    const columnList = document.querySelectorAll('#color-col')
        const footerList = document.querySelectorAll('#footer-col')
        const colorCodes = document.querySelectorAll('p')

        for (let i = 0; i < columnList.length; i++) {
            if (columnList[i].children.length >= 1) {
               columnList[i].removeChild(colorCodes[i])
            }
           let paragraphElement = document.createElement('p')
           paragraphElement.textContent = colorData.colors[i].hex.value
           columnList[i].style.backgroundColor = colorData.colors[i].rgb.value
           columnList[i].append(paragraphElement)
           footerList[i].textContent = colorData.colors[i].hex.value
       }
}

createColorColumns(5)
fetchColors(defaultColor, defaultMode)
