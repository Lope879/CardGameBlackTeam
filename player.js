
class Player {
    constructor() {
        this.hand = [];
        balance = 100;
        this.currentBet = 0;
    }

    /**
     * Function to insert a card into a player's hand.
     * 
     * @param {
     * } card 
     */
    takeCard(card) {
        this.hand.push(card);
    }

    /**
     * Adjusts the player's betting amount.
     * 
     * @param {*} amount - Amount of betting to place
     * @returns True if enough balance and betting amount is adjusted, false if not enough balance and betting remains 0.
     */
    placeBet(amount) {
        // Fails since not enough balance.
        if (amount > this.balance) {
          return false;
        }
        this.currentBet = amount;
        this.balance -= amount;
        return true;
    }
    
    /**
     * Adjusts player's balance if they win, so receives doubled the betting amount.
     */
    winBet() {
        this.balance += this.currentBet * 2;
        this.currentBet = 0;
    }
    
    /**
     * Adjusts player's balance if they tie, so receives the money they gave.
     */
    pushBet() {
        this.balance += this.currentBet;
        this.currentBet = 0;
    }
    
    /**
     * Adjusts player's balance if they lose, so loses the bet money.
     */
    loseBet() {
        this.currentBet = 0;
    }
    
    resetHand() {
        this.hand = [];
    }
    

    /**
     * Function to calculate the total value of a player's hand.
     * 
     * @returns 
     */
    getHandValue() {
        let value = 0;
        let aces = 0;

        //Calculates the total hand of a player and counts aces.
        for (let card of this.hand) {
            value += card.value;
            if (card.rank === "A") {
                aces++;
            }
        }

        // Adjusts total value based on aces. 
        while (value > 21 && aces > 0) {
            value-=10;
            aces--;
        }

        return value;
    }

    // Determines if a player loses. 
    isBusted() {
        return this.getHandValue() > 21;
    }

    // Determine if a player wins by Blackjack.
    hasBlackjack() {
        return this.getHandValue() === 21 && this.hand.length === 2;
    }
}