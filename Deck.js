class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
  
  get suit(){
    return this.rank;
  }

  get value(){
    return this.value;

  get value(){
    return this.suit;
  }
  
}


class Deck{
  constructor(){
    this.cards = [];
    this.build();
  }

  build(){
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const ranks ={"A": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8,
      "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10,};

    for(const s of suits){
      for(const r in ranks){
        const value = ranks[r];
        this.cards.push(new Card(s, r, value));
      }
    }
  }
  
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
