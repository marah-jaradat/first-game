import "./SingleCard.css";

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const clickHandler = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
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
