/*
* File: app.js
* Author: Laczkó Bálint
* Copyright: 2023, Laczkó Bálint
* Group: Szoft I-2-N
* Date: 2021-02-23
* Github: https://github.com/Balint0429/
* Licenc: GNU GPL
*/
const radiusInput = document.querySelector('#radius');
const heightInput = document.querySelector('#height');
const areaInput = document.querySelector('#area');
const calcButton = document.querySelector('#calcButton');

calcButton.addEventListener('click', () => {
    console.log('Terület:')
        const radius = Number(radiusInput.value);
        const height = Number(heightInput.value);
        areaInput.value = area;
    console.log(area);
    return.style.display = "block"
});
function calcArea(radius, height){
    let area =(1.0/3) * Math.pow(radius, 2) * Math.PI * height;
    return area;
}

function deleteInputs(){
    radiusInput.value = " ";
    heightInput.value = " ";
}