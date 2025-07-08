#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uility_1 = require("../uility");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
//* All 4 card suits
const suits = [uility_1.Spades, uility_1.Clubs, uility_1.Diamonds, uility_1.Heart];
//* Draw 1 random card from a random suit
function getRandomCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const entries = Object.entries(suit);
    const [_, [label, value]] = entries[Math.floor(Math.random() * entries.length)];
    return { label, value };
}
//* Show player draw and total
function playing(label1, label2, total) {
    console.log(`Player Hand: ${label1}, ${label2} → Total: ${total}`);
}
//* Show dealer draw and total
function dealer(label1, label2, total) {
    console.log(`Dealer Hand: ${label1}, ${label2} → Total: ${total}`);
}
//* Game logic
function shuffle() {
    const playerCard1 = getRandomCard();
    const playerCard2 = getRandomCard();
    const dealerCard1 = getRandomCard();
    const dealerCard2 = getRandomCard();
    // Calculate totals
    const playerTotal = playerCard1.value + playerCard2.value;
    const dealerTotal = dealerCard1.value + dealerCard2.value;
    let funds = 100;
    console.log(`\nYour Funds: $${funds}`);
    const bet = prompt(`Enter your bet: `);
    const betTaken = Number(bet);
    if (!isNaN(betTaken)) {
        if (betTaken <= funds && betTaken > 0) {
            console.log(`You are betting $${bet}`);
            // Show hands
            playing(playerCard1.label, playerCard2.label, playerTotal);
            dealer(dealerCard1.label, dealerCard2.label, dealerTotal);
            //*
            // Store player cards and total
            let playerCards = [playerCard1.label, playerCard2.label];
            let total = playerTotal;
            // Hit/stand loop
            while (true) {
                console.log(`Your hand: ${playerCards.join(', ')} → Total: ${total}`);
                const action = prompt("Your action (hit/stand): ").toLowerCase();
                if (action === "hit") {
                    const newCard = getRandomCard();
                    playerCards.push(newCard.label);
                    total += newCard.value;
                    console.log(`You drew: ${newCard.label}`);
                    if (total > 21) {
                        console.log("💥 Bust! You went over 21.");
                        break;
                    }
                }
                else if (action === "stand") {
                    console.log("🛑 You chose to stand.");
                    break;
                }
                else {
                    console.log("❗ Invalid input. Please type 'hit' or 'stand'.");
                }
            }
            //*
            prompt("Press enter to continue...");
        }
        else {
            console.log("You do not have that amount, get out");
        }
    }
    else {
        console.log("type in a number fool");
    }
}
shuffle();
