import "./SingleCard.css";

function SingleCard({ card, handleChoice }) {
  const clickHandler = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div>
        <img alt="front" className="front" src={card.src} />
        <img
          alt="back"
          className="back"
          src="/img/cover.png"
          onClick={clickHandler}
        />
      </div>
    </div>
  );
}

export default SingleCard;
