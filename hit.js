const player = new Player();
const dealer = new Player();
let deck = []; // Deck of cards
let status = "playing"; // Game status

function playerHit() {
  const card = deck.pop();
  player.takeCard(card);  
  
  if (player.hasBlackjack()) {
    status = "won";
  }
  else if (player.isBusted()) {
    status = "lost, player bust"; 
  }
  
  return status;
}

function stand() {
  // Player decides to stand, so dealer takes their turn
  dealerHit();
  
  return status;
}

function dealerHit() {
  const card = deck.pop(); 
  dealer.takeCard(card); 
  
  while (dealer.getHandValue() < 17) { // dealer hits aslong as <17 
    const newCard = deck.pop();
    dealer.takeCard(newCard); 
  }
  
  if (dealer.getHandValue() == player.getHandValue()) { // tie game 
    status = "tie"; 
  }
  else if (dealer.isBusted()) { // dealer busted 
    status = "won, dealer bust"; 
  }
  else if (player.getHandValue() < dealer.getHandValue()) { // if dealers hand is stronger than players 
    status = "player lost"; 
  }
  else {
    status = "player won";
  }
}
