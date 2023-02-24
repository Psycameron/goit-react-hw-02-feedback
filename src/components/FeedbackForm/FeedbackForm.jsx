import React, { Component } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';

import style from './FeedbackForm.module.css';

class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const btnName = e.target.name;

    this.setState(preventState => {
      return {
        [btnName]: preventState[btnName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbacksPercentage = () => {
    const { good, neutral, bad } = this.state;

    return (good * 100) / (good + neutral + bad);
  };

  render() {
    return (
      <div className={style.Form}>
        <h1>Please leave feedback</h1>
        <ul>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleIncrement}
          />
        </ul>

        <h2>Statistics</h2>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbacksPercentage()}
        />
      </div>
    );
  }
}

export default FeedbackForm;
