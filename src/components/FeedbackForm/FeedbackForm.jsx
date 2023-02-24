import React, { Component } from 'react';

import style from './FeedbackForm.module.css';

class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(preventState => {
      return { good: preventState.good + 1 };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(preventState => {
      return { neutral: preventState.neutral + 1 };
    });
  };

  handleIncrementBad = () => {
    this.setState(preventState => {
      return { bad: preventState.bad + 1 };
    });
  };

  render() {
    return (
      <div className={style.Form}>
        <h1>Please leave feedback</h1>
        <button
          type="button"
          className={style.Form__button}
          onClick={this.handleIncrementGood}
        >
          Good
        </button>
        <button
          type="button"
          className={style.Form__button}
          onClick={this.handleIncrementNeutral}
        >
          Neutral
        </button>
        <button
          type="button"
          className={style.Form__button}
          onClick={this.handleIncrementBad}
        >
          Bad
        </button>
        <h2>Statistics</h2>
        <p>
          Good:
          <span>{this.state.good}</span>
        </p>
        <p>
          Neutral:
          <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad:
          <span>{this.state.bad}</span>
        </p>
      </div>
    );
  }
}

export default FeedbackForm;
