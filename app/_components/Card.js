function Card({ title, description }) {
  return (
    <div className="card">
      <span className="card__title">{title}</span>
      <p className="card__content">
        {description}
      </p>
    </div>
  );
}

export default Card;
