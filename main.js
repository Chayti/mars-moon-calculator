const marsCost = 5000;
const moonCost = 3000;

function handleQuantity(planet, operator) {
    let quantity = parseInt(document.getElementById(planet + '-quantity').value);

    if (operator == 'add') quantity++;
    else {
        if (quantity < 1) return;
        quantity--;
    }

    document.getElementById(planet + '-quantity').value = quantity;

    calculateJourneyCost(planet, quantity);
}

function calculateJourneyCost(planet, quantity) {
    let planetCost;
    if (planet == 'mars') planetCost = quantity * marsCost;
    else planetCost = quantity * moonCost;
    document.getElementById(planet + '-cost').innerText = planetCost;

    const totalCost = parseInt(document.getElementById('mars-cost').innerText) + parseInt(document.getElementById('moon-cost').innerText);

    document.getElementById('total-cost').innerText = totalCost;
}
