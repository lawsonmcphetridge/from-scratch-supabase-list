export function renderCar(car) {
    const carEl = document.createElement('div');

    const a = document.createElement('a');
    a.href = `/cars/?id=${car.id}`;

    const img = document.createElement('img');
    img.src = `/assets/${car.img}.png`;

    const brandSpan = document.createElement('p');
    brandSpan.textContent = car.Brand;

    // const modelSpan = document.createElement('p');
    // modelSpan.textContent = car.Model;
    
    // const yearSpan = document.createElement('p');
    // yearSpan.textContent = car.Year;

    // const colorSpan = document.createElement('p');
    // colorSpan.textContent = car.Color;

    a.append(img, brandSpan);
    carEl.append(a);

    return carEl;
}