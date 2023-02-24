export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const totalFeedbacks = total;
  const posPercentage = positivePercentage.toFixed(0);

  return (
    <div>
      <p>
        Good:
        <span>{good}</span>
      </p>
      <p>
        Neutral:
        <span>{neutral}</span>
      </p>
      <p>
        Bad:
        <span>{bad}</span>
      </p>
      <p>
        Total:
        <span>{totalFeedbacks}</span>
      </p>
      <p>
        Positive feedbacks:
        <span>{posPercentage}%</span>
      </p>
    </div>
  );
}
