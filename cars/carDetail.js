import { renderCarDetail } from '../render-utils.js';
import { getCarById } from '../fetch-utils.js';





const carContainerDetail = document.getElementById('car-detail');

const params = new URLSearchParams(window.location.search);

async function loadCars() {
    const data = await getCarById(params.get('id'));
    const carDiv = renderCarDetail(data);
    carContainerDetail.append(carDiv);
}

loadCars();
