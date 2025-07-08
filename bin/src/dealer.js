"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealersHand = dealersHand;
const random_1 = require("./random");
function dealersHand(dealercard, dealerstotal) {
    const dealersNextAction = ['hit', 'stand'];
    const actionIndex = Math.floor(Math.random() * dealersNextAction.length);
    const action = dealersNextAction[actionIndex];
    if (action === 'hit') {
        const another = (0, random_1.getRandomCard)();
        dealercard.push(another.label);
        dealerstotal += another.value;
        const show = dealercard.join(', ');
        console.log(`Dealer hits! Hand: ${show} TOTAL(${dealerstotal})`);
    }
    else if (action === 'stand') {
        console.log("Dealer stands.");
    }
}
