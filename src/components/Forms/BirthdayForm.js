import React from 'react';
import NextButton from '../Clickables/NextButton';
import './FormStyles.css';

const BirthdayForm = props => (
  <div className="birthday-form">
    <div className="form-prompt">
      When is {props.name}'s <strong>birthday</strong>?
    </div>
    <img
      className="birthday-form-img"
      alt=""
      src="https://icdn.kiwicrate.com/site/account/punchcard/onboarding/letscelebrate.png"
    /> <br />
    <div className="birthday-form-date">
      <input className="input-text input-date" onInput={props.handleInputChange} type="date" name="birthday" />
    </div>
    <div className="next">
      <NextButton text="Next »" action={props.handleDateSubmit}/>
    </div>
  </div>
);

export default BirthdayForm;