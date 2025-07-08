"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCard = getRandomCard;
const uility_1 = require("../uility");
//* All 4 card suits
const suits = [uility_1.Spades, uility_1.Clubs, uility_1.Diamonds, uility_1.Heart];
//* Draw 1 random card from a random suit
function getRandomCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const entries = Object.entries(suit);
    const [_, [label, value]] = entries[Math.floor(Math.random() * entries.length)];
    return { label, value };
}
