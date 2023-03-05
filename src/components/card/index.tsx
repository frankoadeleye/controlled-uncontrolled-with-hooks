import "src/styles/card.css";

interface CardProps {
  cardValues: {
    last_name: string;
    first_name: string;
  };
  showCard: boolean;
}

function Card({ cardValues, showCard }: CardProps) {
  const { last_name, first_name } = cardValues;

  if (showCard) {
    return (
      <div className="card">
        <div>{last_name}</div>
        <div>{first_name}</div>
      </div>
    );
  }
}

export default Card;
