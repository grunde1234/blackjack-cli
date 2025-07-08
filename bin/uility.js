"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heart = exports.Diamonds = exports.Clubs = exports.Spades = void 0;
//* This is the decks of cards stored in sets of object
//* Heart
const Heart = {
    Ace: ["A♥️", 10],
    TypeOne: ["2♥️", 2],
    TypeTwo: ["3♥️", 3],
    TypeFour: ["4♥️", 4],
    TypeFive: ["5♥️", 5],
    TypeSix: ["6♥️", 6],
    TYpeSeven: ["7♥️", 7],
    TypeEight: ["8♥️", 8],
    TypeNine: ["9♥️", 9],
    TypeJ: ["J♥️", 11],
    TypeQ: ["Q♥️", 11],
    TypeK: ["K♥️", 11]
};
exports.Heart = Heart;
//*DIAMONDS
const Diamonds = {
    Ace: ["A♦️", 10],
    TypeOne: ["2♦️", 2],
    TypeTwo: ["3♦️", 3],
    TypeFour: [" 4♦️", 4],
    TypeFive: [" 5♦️", 5],
    TypeSix: ["6♦️", 6],
    TYpeSeven: ["7♦️", 7],
    TypeEight: ["8♦️", 8],
    TypeNine: ["9♦️", 9],
    TypeJ: ["J♦️", 11],
    TypeQ: ["Q♦️", 11],
    TypeK: ["K♦️", 11]
};
exports.Diamonds = Diamonds;
//*CLUBS
const Clubs = {
    Ace: ["A♣️", 10],
    TypeOne: ["2♣️", 2],
    TypeTwo: ["3♣️", 3],
    TypeFour: ["4♣️", 4],
    TypeFive: ["5♣️", 5],
    TypeSix: ["6♣️", 6],
    TYpeSeven: ["7♣️", 7],
    TypeEight: ["8♣️", 8],
    TypeNine: ["9♣️", 9],
    TypeJ: ["J♣️", 11],
    TypeQ: ["Q♣️", 11],
    TypeK: ["K♣️", 11]
};
exports.Clubs = Clubs;
//*SPADES
const Spades = {
    Ace: ["A♠️", 10],
    TypeOne: ["2♠️", 2],
    TypeTwo: ["3♠️", 3],
    TypeFour: ["4♠️", 4],
    TypeFive: ["5♠️", 5],
    TypeSix: ["6♠️", 6],
    TYpeSeven: ["7♠️", 7],
    TypeEight: ["8♠️", 8],
    TypeNine: ["9♠️", 9],
    TypeJ: ["J♠️", 11],
    TypeQ: ["Q♠️", 11],
    TypeK: ["K♠️", 11]
};
exports.Spades = Spades;
//*USING THE LENGTH OF THE ARRAY TO GET VALUES
//* USING oBJECT.ENTRY(SUIT[INDEX])
//* ANOTHER RANDOM SINCE THE OBJECTS HAVE ARRAYS INSIDE
