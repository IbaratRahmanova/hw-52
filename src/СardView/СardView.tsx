import React from 'react';
interface ICardViewProps extends React.PropsWithChildren {
  rank: string;
  suit: string;
}
const СardView: React.FC<ICardViewProps> = props => {
  const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`;

  const getSuitSymbol = (suit: string) => {
    switch (suit) {
      case 'diams':
        return '♦';
      case 'hearts':
        return '♥';
      case 'clubs':
        return '♣';
      case 'spades':
        return '♠';
      default:
        return '';
    }
  };

  return (
    <div className="App">
      <div className="playingCards faceImages">
        <span className={cardClasses}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{getSuitSymbol(props.suit)}</span>
        </span>
      </div>
    </div>
  );
};
export default СardView;
