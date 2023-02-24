import React, { Component } from 'react';

import { Statistics } from 'components/Statistics';

import style from './FeedbackForm.module.css';

class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(preventState => {
      return {
        good: preventState.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(preventState => {
      return {
        neutral: preventState.neutral + 1,
      };
    });
  };

  handleIncrementBad = () => {
    this.setState(preventState => {
      return { bad: preventState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbacksPercentage = () => {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    );
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

        <Statistics
          onIncrementGood={this.state.good}
          onIncrementNeutral={this.state.neutral}
          onIncrementBad={this.state.bad}
          onTotal={this.countTotalFeedback()}
          onPositivePercentage={this.countPositiveFeedbacksPercentage()}
        />
      </div>
    );
  }
}

export default FeedbackForm;
