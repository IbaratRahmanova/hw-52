import React, {useState} from 'react';
import CardView from './СardView/СardView';
import CardDeck from "./lib/CardDeck";
import './App.css';
import './cards.css';
import Card from "./lib/Card";

const App = () => {
  const [cards2, setCards] = useState<Card[]>([]);

  const dealCards = () => {
    const cardDeck = new CardDeck();
    const cards1 = cardDeck.getCards(5);

    setCards(cards1);
  };

  if (cards2.length === 0) return <button onClick={dealCards}>Deal cards</button>;

  return (
    <div className="App">
      <button className="custom-btn btn-14" onClick={dealCards}>Deal cards</button>
      <div className="playingCards faceImages">
            <CardView rank={cards2[0].rank} suit={cards2[0].suit}/>
            <CardView rank={cards2[1].rank} suit={cards2[1].suit}/>
            <CardView rank={cards2[2].rank} suit={cards2[2].suit}/>
            <CardView rank={cards2[3].rank} suit={cards2[3].suit}/>
            <CardView rank={cards2[4].rank} suit={cards2[4].suit}/>
      </div>
    </div>
  );
};
export default App;
