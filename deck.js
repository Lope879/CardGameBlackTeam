class Card {

    /**
     * Creates a playing card with 3 traits - suit, rank and actual value
     * 
     * @param {"hearts" | "diamonds"| "clubs"| "spades"} suit - the suit of the card (faces) 
     * @param {A | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | J | Q | K} rank - The rank of the card, includes strings and numbers
     * @param {1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} value - the numerical value of the card represented in the game
     */
    constructor(suit, rank, value) {
      this.suit = suit;
      this.rank = rank;
      this.value = value;
    }
  
  }
  
  
  class Deck{
    
    /**
     * Creates a deck of 52 Card objects 
     * 
     * @constructor
     */
    constructor(){
        /**
         * @type {Card[]}
         */
        this.cards = [];
        /**
         * builds the deck, adds Card objects to cards[]
         */
        this.build();
    }
    

    /**
     * function building the deck using all combinations of suits and 
     */
    build(){
      /**
       * card suits
       */
      const suits = ["hearts", "diamonds", "clubs", "spades"];
      /**
       * card ranks
       */
      const ranks ={"A": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8,
        "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10,};
  
      for(const s of suits){
        for(const r in ranks){
          const value = ranks[r];
          this.cards.push(new Card(s, r, value));
        }
      }
    }
    

    // fisher-yates
    shuffle(){
      for (let i = this.cards.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    deal(){
      return this.cards.pop();
    }

  }
