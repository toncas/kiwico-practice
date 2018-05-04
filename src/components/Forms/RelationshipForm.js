import React from 'react';
import NextButton from '../Clickables/NextButton';
import './FormStyles.css';
import './RadioButtonStyles.css';

const boyOptions = (callback) => (
  <form onChange={callback} className="relationship-form-radios">
    <div className="col left-col">
      <label className="container">Son
        <input type="radio" name="relationship" id="son" value="son"  />
        <span className="checkmark"></span>
      </label>

      <label className="container">Grandson
        <input type="radio" name="relationship" id="grandson" value="grandson"  />
        <span className="checkmark"></span>
      </label>

      <label className="container">Nephew
        <input type="radio" name="relationship" id="nephew" value="nephew" />
        <span className="checkmark"></span>
      </label>
    </div>

    <div className="col right-col">
      <label className="container">Family Friend
        <input type="radio" name="relationship" id="family-friend" value="family-friend" />
        <span className="checkmark"></span>
      </label>

      <label className="container">Other
        <input type="radio" name="relationship" id="other" value="other" />
        <span className="checkmark"></span>
      </label>
    </div>
  </form>
);

const girlOptions = (callback) => (
  <form onChange={callback} className="relationship-form-radios">
    <div className="col left-col">
      <label className="container">Daughter
        <input type="radio" name="relationship" id="daughter" value="daughter"  />
        <span className="checkmark"></span>
      </label>

      <label className="container">Granddaughter
        <input type="radio" name="relationship" id="granddaughter" value="granddaughter"  />
        <span className="checkmark"></span>
      </label>

      <label className="container">Niece
        <input type="radio" name="relationship" id="niece" value="niece" />
        <span className="checkmark"></span>
      </label>
    </div>

    <div className="col right-col">
      <label className="container">Family Friend
        <input type="radio" name="relationship" id="family-friend" value="family-friend" />
        <span className="checkmark"></span>
      </label>

      <label className="container">Other
        <input type="radio" name="relationship" id="other" value="other" />
        <span className="checkmark"></span>
      </label>
    </div>
  </form>
);

const RelationshipForm = props => (
  <div className="relationship-form">
    <div className="form-prompt">
      What is {props.gender === 'boy' ? "his" : "her"} <strong>relationship</strong> to you?
    </div>
    <div className="relationship-form-form">
      {props.gender === 'boy' ? boyOptions(props.handleInputChange) : girlOptions(props.handleInputChange)}
    </div>
    <div className="next">
      <NextButton text="Done" action={props.displayState} />
    </div>
  </div>
);

export default RelationshipForm;