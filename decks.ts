import colors from "colors";
import {
  Spades,
  Clubs,
  Diamonds,
  Heart
} from "./uility";

import promptSync from 'prompt-sync';
const prompt = promptSync();

//* All 4 card suits
const suits = [Spades, Clubs, Diamonds, Heart];

//* Draw 1 random card from a random suit
function getRandomCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const entries = Object.entries(suit);
  const [_, [label, value]] = entries[Math.floor(Math.random() * entries.length)];
  return { label, value };
}

//* Show player draw and total
function playing(label1: string, label2: string, total: number) {
  console.log(`Player Hand: ${label1}, ${label2} → Total: ${total}`);
}

//* Show dealer draw and total
function dealer(label1: string, label2: string, total: number) {
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
  const betTaken = Number(bet)
  if(!isNaN(betTaken)){
  if(betTaken <= funds && betTaken > 0 ){

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
  } else if (action === "stand") {
    console.log("🛑 You chose to stand.");
    break;
  } else {
    console.log("❗ Invalid input. Please type 'hit' or 'stand'.");
  }
}

  //*

  prompt("Press enter to continue...");
}
else{
    console.log("You do not have that amount, get out")
}
  }else{
    console.log("type in a number fool")
  }
}

shuffle();


