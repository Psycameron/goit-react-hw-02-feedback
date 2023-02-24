export function Statistics({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
  onTotal,
  onPositivePercentage,
}) {
  const total = onTotal;
  const positivePercentage = onPositivePercentage.toFixed(0);

  return (
    <div>
      <h2>Statistics</h2>
      <p>
        Good:
        <span>{onIncrementGood}</span>
      </p>
      <p>
        Neutral:
        <span>{onIncrementNeutral}</span>
      </p>
      <p>
        Bad:
        <span>{onIncrementBad}</span>
      </p>
      <p>
        Total:
        <span>{total}</span>
      </p>
      <p>
        Positive feedbacks:
        <span>{positivePercentage}%</span>
      </p>
    </div>
  );
}
