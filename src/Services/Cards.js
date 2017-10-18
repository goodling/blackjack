const CARD_SUITS = [ 'C', 'S', 'H', 'D' ];
const CARD_RANKS = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
const COLOR_KEY =  { 'C': 'black', 'S': 'black', 'H': 'red', 'D': 'red' };
const SUIT_KEY = { 'C':'♣', 'D':'♦', 'H':'♥', 'S':'♠'};

export function shuffleDeck(deck) {
    // FISHER-YATES SHUFFLE
    let shuffled = Array.from(deck);

    let i = 0, j = 0, temp = null

    for (i = shuffled.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = shuffled[i]
        shuffled[i] = shuffled[j]
        shuffled[j] = temp
    }

    return shuffled;
}

function calculateValue(value){
    switch (value) {
        case 'K':
        case 'Q':
        case 'J':
            return 10;
        case 'A':
            return 11;
        default:
            return value;
    }
}

export function newDeck() {
    // make a blank deck array
    const deck = [];
    CARD_RANKS.forEach(r => {
        CARD_SUITS.forEach( s => {
            deck.push( { rank: r, suit: s, value: calculateValue(r), color: COLOR_KEY[s], symbol: SUIT_KEY[s] } )
        })
    })
    return shuffleDeck(deck);
}

export function getPlayerScore(hand) {

    //SUM SCORE
    let score = hand.reduce((score, card) => {
        return score + card.value;
    }, 0);

    //PLAY 11s as 1s
    hand.filter(c => c.rank === 'A').forEach( c => {
        if(score > 21){
            score -= 10;
        }
    })
    return score;
}