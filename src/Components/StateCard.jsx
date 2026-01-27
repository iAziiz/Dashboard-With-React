function StateCard({ title, value }) {
  return (
    <div className="state-card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

export default StateCard;
