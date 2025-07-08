import {getRandomCard} from './random'
export function dealersHand(dealercard: string[], dealerstotal: number, totalPlayer: number, funds: number, betTaken: number) {
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
    console.log(`💸 Dealer wins! you lost ${funds--}`);
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
        console.log(`💥 Bust! dealer drew ${show} and TOTAL(${dealerstotal})`)
         console.log(`🎉 You win! for now and your money is $${funds += betTaken}`);
    //*DEALER WINS
    }else if((dealerstotal > totalPlayer && dealerstotal <= 21) || (dealerstotal < totalPlayer && totalPlayer > 21) ) {
    console.log(`💸 Dealer wins! you lost`);
    //*YOU WIN
    } else if (dealerstotal < totalPlayer && totalPlayer <= 21 ) {
        console.log("🎉 You win!");
    } else if(dealerstotal > 21 && totalPlayer > 21 || dealerstotal === totalPlayer) {
        console.log(`🤝 It's a tie! fund is $${funds}`);
    }
  }
  

  return {dealercard, dealerstotal}
}