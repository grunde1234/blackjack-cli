"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealersHand = dealersHand;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const random_1 = require("./random");
const decks_1 = require("./decks");
function dealersHand(dealercard, dealerstotal, totalPlayer, funds, betTaken) {
    const dealersNextAction = ['hit', 'stand'];
    const actionIndex = Math.floor(Math.random() * dealersNextAction.length);
    const action = dealersNextAction[actionIndex];
    //*HTT
    if (action === 'hit') {
        const another = (0, random_1.getRandomCard)();
        dealercard.push(another.label);
        dealerstotal += another.value;
        const show = dealercard.join(', ');
        console.log(`Dealer hits! Hand: ${show} TOTAL(${dealerstotal})`);
        //*BURST LOGIC
        if (dealerstotal > 21) {
            console.log(`💥 Bust! dealer drew ${show} and TOTAL(${dealerstotal})`);
            //*DEALER WINS
        }
        else if ((dealerstotal > totalPlayer && dealerstotal <= 21) || (dealerstotal < totalPlayer && totalPlayer > 21)) {
            console.log(`💸 Dealer wins! you lost you have ${funds--}`);
            //*YOU WIN
        }
        else if (dealerstotal < totalPlayer && totalPlayer <= 21) {
            console.log("🎉 You win!");
        }
        else {
            console.log("🤝 It's a tie!");
        }
        //*STAND
    }
    else if (action === 'stand') {
        console.log(`Dealer stands. Dealers card is ${dealercard.join(', ')} TOTAL is ${dealerstotal}`);
        const show = dealercard.join(', ');
        //*BURST LOGIC
        if (dealerstotal > 21 && totalPlayer <= 21) {
            console.log(`💥 Bust! dealer drew ${show} and TOTAL(${dealerstotal})`);
            console.log(`🎉 You win! for now and your money is $${funds += betTaken}`);
            //*DEALER WINS
        }
        else if ((dealerstotal > totalPlayer && dealerstotal <= 21) || (dealerstotal < totalPlayer && totalPlayer > 21)) {
            console.log(`💸 Dealer wins! you lost`);
            //*YOU WIN
        }
        else if (dealerstotal < totalPlayer && totalPlayer <= 21) {
            console.log("🎉 You win!");
        }
        else if (dealerstotal > 21 && totalPlayer > 21 || dealerstotal === totalPlayer) {
            console.log(`🤝 It's a tie! fund is $${funds}`);
        }
    }
    let choose = prompt("would you like to continue....YES/NO: ");
    if (choose === "yes") {
        (0, decks_1.shuffle)();
    }
    else {
        return;
    }
    return { dealercard, dealerstotal };
}
