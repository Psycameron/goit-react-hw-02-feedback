import React, { Component } from 'react';

import style from './FeedbackForm.module.css';

class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div className={style.FeedbackForm}>
        <h1>Please leave feedback</h1>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <p>
          Good:
          <span></span>
        </p>
        <p>
          Neutral:
          <span></span>
        </p>
        <p>
          Bad:
          <span></span>
        </p>
      </div>
    );
  }
}

export default FeedbackForm;
