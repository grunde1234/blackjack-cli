import {
  Spades,
  Clubs,
  Diamonds,
  Heart
} from "../uility";


//* All 4 card suits
const suits = [Spades, Clubs, Diamonds, Heart];

//* Draw 1 random card from a random suit
export function getRandomCard() {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const entries = Object.entries(suit);
  const [_, [label, value]] = entries[Math.floor(Math.random() * entries.length)];
  return { label, value };
}
