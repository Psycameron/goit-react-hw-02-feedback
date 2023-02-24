import style from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const totalFeedbacks = total;
  const posPercentage = positivePercentage.toFixed(0);

  return (
    <div>
      <p className={style.good}>
        Good:
        <span className={style.number}>{good}</span>
      </p>
      <p className={style.neutral}>
        Neutral:
        <span className={style.number}>{neutral}</span>
      </p>
      <p className={style.bad}>
        Bad:
        <span className={style.number}>{bad}</span>
      </p>
      <p>
        Total:
        <span className={style.number}>{totalFeedbacks}</span>
      </p>
      <p>
        Positive feedbacks:
        <span className={style.number}>{posPercentage}%</span>
      </p>
    </div>
  );
}
