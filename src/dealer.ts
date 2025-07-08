import {getRandomCard} from './random'
export function dealersHand(dealercard: string[], dealerstotal: number) {
  const dealersNextAction = ['hit', 'stand'];
  const actionIndex = Math.floor(Math.random() * dealersNextAction.length);
  const action = dealersNextAction[actionIndex];

  if (action === 'hit') {
    const another = getRandomCard();
    dealercard.push(another.label);
    dealerstotal += another.value;

    const show = dealercard.join(', ');
    console.log(`Dealer hits! Hand: ${show} TOTAL(${dealerstotal})`);
  } else if (action === 'stand') {
    console.log("Dealer stands.");
  }
}