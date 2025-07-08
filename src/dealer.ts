import promptSync from 'prompt-sync';
const prompt = promptSync();
import {getRandomCard} from './random'
import { shuffle } from './decks';
export function dealersHand(dealercard: string[], dealerstotal: number, totalPlayer: number, funds: number, betTaken: number) {
  let newOne = funds
  const dealersNextAction = ['hit', 'stand'];
  const actionIndex = Math.floor(Math.random() * dealersNextAction.length);
  const action = dealersNextAction[actionIndex];
    //*HTT
  if (action === 'hit') {
    const another = getRandomCard();
    dealercard.push(another.label);
    dealerstotal += another.value;

    const show = dealercard.join(', ');
    console.log(`Dealer hits! Hand: ${show} TOTAL(${dealerstotal})`);
    //*BURST LOGIC
    if(dealerstotal > 21){
        console.log(`💥 Bust! dealer drew ${show} and TOTAL(${dealerstotal})`)
    //*DEALER WINS
    }else if((dealerstotal > totalPlayer && dealerstotal <= 21) || (dealerstotal < totalPlayer && totalPlayer > 21) ) {
    console.log(`💸 Dealer wins! you lost you have $${newOne--}`);
    //*YOU WIN
    } else if (dealerstotal < totalPlayer && totalPlayer <= 21 ) {
        console.log("🎉 You win!");
    } else {
        console.log("🤝 It's a tie!");
    }
    //*STAND
  } else if (action === 'stand') {
    console.log(`Dealer stands. Dealers card is ${dealercard.join(', ')} TOTAL is ${dealerstotal}`);
    const show = dealercard.join(', ');
        //*BURST LOGIC
    if(dealerstotal > 21 && totalPlayer <= 21){
        console.log(`💥 Bust! dealer drew ${show} and TOTAL(${dealerstotal} 🎉 You win! for now and your money is $${newOne += betTaken})`)
        
    //*DEALER WINS
    }else if((dealerstotal > totalPlayer && dealerstotal <= 21) || (dealerstotal < totalPlayer && totalPlayer > 21) ) {
    console.log(`💸 Dealer wins! you lost`);
    //*YOU WIN
    } else if (dealerstotal < totalPlayer && totalPlayer <= 21 ) {
        console.log("🎉 You win!");
    } else if(dealerstotal > 21 && totalPlayer > 21 || dealerstotal === totalPlayer) {
        console.log(`🤝 It's a tie! fund is $${newOne}`);
    }
  }
  let choose = prompt("would you like to continue....YES/NO: ")

  if(choose === "yes"){
        shuffle(newOne)
    }else{
        return;
    }
  

  return {dealercard, dealerstotal}
}