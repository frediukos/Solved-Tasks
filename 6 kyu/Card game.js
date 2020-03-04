// Card game

/*
Lеt's create function to play cards. Our rules:

We have the preloaded deck:

deck = ['joker','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
                '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
                '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
                '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠']
We have 3 arguments:

card1 and card2 - any card of our deck.

trump - the main suit of four ('♣', '♦', '♥', '♠').

If both cards have the same suit, the big one wins.

If the cards have different suits (and no one has trump) return 'Let's play again.'

If one card has trump unlike another, wins the first one.

If both cards have trump, the big one wins.

If card1 wins, return 'The first card won.' and vice versa.

If the cards are equal, return 'Someone cheats.'

A few games:

('3♣', 'Q♣', '♦') -> 'The second card won.'

('5♥', 'A♣', '♦') -> 'Let us play again.'

('8♠', '8♠', '♣') -> 'Someone cheats.'

('2♦', 'A♠', '♦') -> 'The first card won.'

('joker', 'joker', '♦') -> 'Someone cheats.'
P.S. As a card you can also get the string 'joker' - it means this card always wins.
ALGORITHMS   GAMES   STRINGS   BASIC LANGUAGE FEATURES   FUNDAMENTALS
 */

function cardGame(card1, card2, trump) {
  console.log(card1+'   '+ card2+'   '+ trump);
  const deck = ['joker','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
    '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
    '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
    '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
  if (card1 === card2) return 'Someone cheats.';
  if (card1 === 'joker') { return 'The first card won.' }
  else if (card2 === 'joker') { return 'The second card won.' }
  if (card1[card1.length-1] !== card2[card2.length-1] && card1[card1.length-1] !== trump && card2[card2.length-1] !== trump) {
    return 'Let us play again.';
  } else if (card1[card1.length-1] === card2[card2.length-1] && card1[card1.length-1] === trump) {
    deck.indexOf(card1) > deck.indexOf(card2)
      ? 'The first card won.'
      : 'The second card won.';
  }
  if (card1[card1.length-1] !== card2[card2.length-1])
    if (card1[card1.length-1] === trump) { return 'The first card won.'; }
    else if (card2[card2.length-1] === trump) return 'The second card won.';
  if (card1[card1.length-1] === card2[card2.length-1] && deck.indexOf(card1) > deck.indexOf(card2)) {
    return 'The first card won.';
  } else {
    return 'The second card won.';
  }
}