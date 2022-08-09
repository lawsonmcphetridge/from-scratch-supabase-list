// import functions and grab DOM elements
import { getCars } from './fetch-utils.js';
import { renderCar } from './render-utils.js';


const carListContainer = document.getElementById('car-list');
// let state
async function loadCars() {
    const cars = await getCars();

    for (let car of cars) {
        const carEl = renderCar(car);
        carListContainer.append(carEl);
    }
  
}
loadCars();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
