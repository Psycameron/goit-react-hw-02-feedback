export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const allFeedbacks = total;
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
        <span>{allFeedbacks}</span>
      </p>
      <p>
        Positive feedbacks:
        <span>{posPercentage}%</span>
      </p>
    </div>
  );
}
