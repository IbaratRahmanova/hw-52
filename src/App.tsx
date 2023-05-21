import React, {useState} from 'react';
import CardView from './СardView/СardView';
import CardDeck from "./lib/CardDeck";
import './App.css';
import './cards.css';

const App = () => {
  const cardDeck = new CardDeck();

  return (
    <div className="App">
      <CardView rank="K" suit="diams"/>
      <CardView rank="Q" suit="hearts"/>
      <CardView rank="J" suit="clubs"/>
    </div>
  );
};

export default App;
