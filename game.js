
function playBlackjack() {
    const deck = new Deck();
    const player = new Player();
    const dealer = new Player();
  
    // Checks that the user still has enough balance to play a round.
    while (player.balance > 0) {

      // Resets to accomodate new rounds.
      player.resetHand();
      dealer.resetHand();
  
      let bet = parseInt(prompt("Place your bet:"));
  
      if (!player.placeBet(bet)) {
        continue;
      }
  
      // Deal initial cards
      player.takeCard(deck.deal());
      dealer.takeCard(deck.deal());
      player.takeCard(deck.deal());
      dealer.takeCard(deck.deal());
  

      playerTurn(player, deck);
  
      if (!player.isBusted()) {
        dealerTurn(dealer, deck);
      }
  
      const result = determineWinner(player, dealer);
      console.log(result);
  
      if (result === 'Player wins!') {
        player.winBet();
      } else if (result === 'Push (tie)!') {
        player.pushBet();
      } else {
        player.loseBet();
      }
  
      console.log(`Your new balance: $${player.balance}`);
      if (player.balance === 0) {
        console.log("You're out of money! Game over.");
        break;
      }
  
      const playAgain = prompt("Play another round? (yes/no)");
      if (playAgain.toLowerCase() !== 'yes') break;
    }
  }

function determineWinner(player, dealer) {
    const playerValue = player.getHandValue();
    const dealerValue = dealer.getHandValue();
  
    if (player.isBusted()) {
      return 'Dealer wins!';
    } else if (dealer.isBusted()) {
      return 'Player wins!';
    } else if (playerValue > dealerValue) {
      return 'Player wins!';
    } else if (playerValue < dealerValue) {
      return 'Dealer wins!';
    } else {
      return 'Push (tie)!';
    }
}

function dealerTurn(dealer, deck) {
    while (dealer.getHandValue() < 17) {
      dealer.takeCard(deck.dealCard());
      console.log(`Dealer hits and now has ${dealer.getHandValue()}`);
    }
  
    if (dealer.isBusted()) {
      console.log("Dealer busted!");
    } else {
      console.log(`Dealer stands with ${dealer.getHandValue()}`);
    }
  }

  /**
   * Manages the situation when it is the player's turn.
   * 
   * @param {*} player 
   * @param {*} deck 
   */
function playerTurn(player, deck) {
    let action;
    while (true) {
      action = prompt("Do you want to 'hit' or 'stand'?");
  
      if (action.toLowerCase() === 'hit') {
        player.takeCard(deck.deal());
        
        if (player.isBusted()) {
          break;
        }
      } else if (action.toLowerCase() === 'stand') {
        break;
      } else {
        continue;
      }
    }
}