#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = shuffle;
const dealer_1 = require("./dealer");
const random_1 = require("./random");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
//* Show player draw and total
function playing(label1, label2, total) {
    console.log(`Player Hand: ${label1}, ${label2} → Total: ${total}`);
}
//* Show dealer draw and total
function dealer(label1, label2, total) {
    console.log(`Dealer Hand: ${label1}, ${label2} → Total: ${total}`);
}
//* Game logic
function shuffle(newFund) {
    const playerCard1 = (0, random_1.getRandomCard)();
    const playerCard2 = (0, random_1.getRandomCard)();
    const dealerCard1 = (0, random_1.getRandomCard)();
    const dealerCard2 = (0, random_1.getRandomCard)();
    // Calculate totals
    const playerTotal = playerCard1.value + playerCard2.value;
    const dealerTotal = dealerCard1.value + dealerCard2.value;
    let funds = newFund;
    console.log(`\nYour Funds: $${funds}`);
    const bet = prompt(`Enter your bet: `);
    const betTaken = Number(bet);
    if (!isNaN(betTaken)) {
        if (betTaken <= funds && betTaken > 0) {
            console.log(`You are betting $${bet}`);
            // Show hands
            /* playing(playerCard1.label, playerCard2.label, playerTotal);
            dealer(dealerCard1.label, dealerCard2.label, dealerTotal); */
            //*
            // Store player cards and total
            //* kept to store memory
            //*DEALERS CARD AND PLAYER CARDS
            let dealercard = [dealerCard1.label, dealerCard2.label];
            let playerCards = [playerCard1.label, playerCard2.label];
            let totalPlayer = playerTotal;
            let dealertotal = dealerTotal;
            // Hit/stand loop
            while (true) {
                console.log(`Your hand: ${playerCards.join(', ')} → Total: ${totalPlayer}`);
                //*DEALERS TURN
                //dealersHand(dealercard, dealertotal, playerTotal);
                //*BLACKJACK CALL
                if ((playerCard1.label === "A♠️" || playerCard1.label === "K♠️") &&
                    (playerCard2.label === "A♠️" || playerCard2.label === "K♠️")) {
                    console.log(`Your hand: ${playerCards.join(', ')} (BLACKJACK)`);
                    // break or return here
                }
                else {
                    // continue logic
                }
                /* console.log(`Dealers hand: ${dealerCard1.label}, `) */
                //* hidden for dealer
                console.log(`Dealer's hand: ${dealerCard1.label}, [HIDDEN]`);
                const action = prompt("Your action (hit/stand): ").toLowerCase();
                if (action === "hit") { //* Loop until it goes to the next if
                    const newCard = (0, random_1.getRandomCard)();
                    playerCards.push(newCard.label);
                    totalPlayer += newCard.value; //*Accumulate or use reduce
                    console.log(`You drew: ${newCard.label} and total is ${totalPlayer}`);
                    if (totalPlayer > 21) {
                        console.log(`💥 Bust! You drew ${playerCards.join(', ')} and Total is ${totalPlayer}. and your fund is $${funds -= betTaken} you loser`);
                        //*DEALERS TURN
                        (0, dealer_1.dealersHand)(dealercard, dealertotal, totalPlayer, funds, betTaken);
                        break;
                    }
                }
                else if (action === "stand") {
                    console.log("🛑 You chose to stand.");
                    console.log(`Your hand: ${playerCards.join(', ')} → Total: ${totalPlayer}`);
                    //*DEALERS TURN
                    (0, dealer_1.dealersHand)(dealercard, dealertotal, totalPlayer, funds, betTaken);
                    break;
                }
                else {
                    console.log("❗ Invalid input. Please type 'hit' or 'stand'.");
                }
            }
        }
        else {
            console.log("You do not have that amount, get out");
        }
    }
    else {
        console.log("type in a number fool");
    }
    //*dealer
    /* let dealercard = [dealerCard1.label, dealerCard2.label]
    let playerCards = [playerCard1.label, playerCard2.label];
    let totalPlayer = playerTotal;
    let dealertotal = dealerTotal; */
}
shuffle(100);
//*MISMATCH - THIS ALWAYS RETURNS
/* //*BLACKJACK CALL
  if((playerCard1.label || playerCard2.label === "A♠️" || "K♠️") && (playerCard1.label || playerCard2.label === "K♠️" || "A♠️") ){
    console.log(`Your hand: ${playerCards.join(', ')} (BLACKJACK)`);
  }
  else{
    continue
  } */
//* loop over until the answer matches
