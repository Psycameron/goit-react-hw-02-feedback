export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(el => {
    return (
      <li key={el}>
        <button name={el.toLowerCase()} type="button" onClick={onLeaveFeedback}>
          {el}
        </button>
      </li>
    );
  });
}
