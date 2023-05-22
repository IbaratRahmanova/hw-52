import Card from "./Card";

class CardDeck {
  private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  private readonly suits = ['spades', 'hearts', 'diams', 'clubs'];
  public deck: Card[] = [];
  constructor() {
    this.suits.forEach(suit => {
      this.ranks.forEach(rank => {
        const card = new Card(rank, suit);
        this.deck.push(card);
      })
    })
  }

  public getCard = () => {
    const ind = Math.floor(Math.random()*53);
    // let removedCard: Card[];
    return  this.deck.splice(ind, 1);
  };

  public getCards = (howMany: number) => {
    const removedCards: Card[] = [];
    for (let i=1; i <= howMany; i++ ) {
      const removedCard = this.getCard();
      removedCards.push(removedCard[0]);
    }
    return removedCards;
  };
}
export default CardDeck;