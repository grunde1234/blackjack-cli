#!/usr/bin/env node
import {dealersHand} from './dealer'
import {getRandomCard} from './random'
import colors from "colors";
import promptSync from 'prompt-sync';
const prompt = promptSync();


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
  /* playing(playerCard1.label, playerCard2.label, playerTotal);
  dealer(dealerCard1.label, dealerCard2.label, dealerTotal); */
  
  //*
    // Store player cards and total
    //* kept to store memory
//*DEALERS CARD AND PLAYER CARDS
let dealercard = [dealerCard1.label, dealerCard2.label]
let playerCards = [playerCard1.label, playerCard2.label];
let totalPlayer = playerTotal;
let dealertotal = dealerTotal;

// Hit/stand loop

while (true) {
  console.log(`Your hand: ${playerCards.join(', ')} → Total: ${totalPlayer}`);
  /* console.log(`Dealers hand: ${dealerCard1.label}, `) */
  //* hidden for dealer
  console.log(`Dealer's hand: ${dealerCard1.label}, [HIDDEN]`)
  const action = prompt("Your action (hit/stand): ").toLowerCase();

  if (action === "hit") {
    const newCard = getRandomCard();
    playerCards.push(newCard.label);
    totalPlayer += newCard.value;

    console.log(`You drew: ${newCard.label} and total is ${totalPlayer}`);

    if (totalPlayer > 21) {
      console.log(`💥 Bust! You drew ${playerCard2}.`);
      break;
    }
  } else if (action === "stand") {
    console.log("🛑 You chose to stand.");
    //*DEALERS TURN 
    dealersHand(dealercard, dealertotal)
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


//*dealer
/* let dealercard = [dealerCard1.label, dealerCard2.label]
let playerCards = [playerCard1.label, playerCard2.label];
let totalPlayer = playerTotal;
let dealertotal = dealerTotal; */




}

shuffle();