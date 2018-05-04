import React from 'react';
import './FormStyles.css';

const GenderForm = props => (
  <div className="gender-form">
    <div className="form-prompt">
      Select {props.name}'s <strong>gender</strong>:
    </div>
    
    <div className="gender-select">
      <input
        className="gender-select-boy gender-select-input"
        alt=""
        type="image"
        src="http://icdn.kiwicrate.com/site/account/gender-boy.png"
        name="gender"
        value="boy"
        onClick={props.handleGenderSelect}
      />
      <input
        className="gender-select-girl gender-select-input"
        alt=""
        type="image"
        src="http://icdn.kiwicrate.com/site/account/gender-girl.png"
        name="gender"
        value="girl"
        onClick={props.handleGenderSelect}
      />
    </div>
  </div>
);

export default GenderForm;