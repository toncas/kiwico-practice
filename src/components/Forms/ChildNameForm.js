import React from 'react';
import NextButton from '../Clickables/NextButton';
import './FormStyles.css';

const ChildNameForm = props => (
  <div className="child-name-form">
    <div className="form-prompt">
      What is the child's <strong>name</strong>?
    </div>
    <div className="child-name-form-inputs">
      <div className="child-name-form-inputs-first">
        <strong>First Name</strong> <br />
        <input
          className="input-text"
          onChange={props.handleInputChange}
          type="text"
          placeholder="Steve"
          name="firstName"
        />
      </div>
      <div className="child-name-form-inputs-last">
        <strong>Last Name</strong> <br />
        <input
          className="input-text"
          onChange={props.handleInputChange}
          type="text"
          placeholder="Kiwi"
          name="lastName"
        />
      </div>
    </div>
    <div className="next">
      <NextButton text="Next »" action={props.handleNameSubmit}/>
    </div>
  </div>
);

export default ChildNameForm;