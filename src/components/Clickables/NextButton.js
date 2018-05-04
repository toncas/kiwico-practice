import React from 'react';
import './ClickableStyles.css'

const NextButton = props => (
  <button className="next-btn" onClick={props.action}>{props.text}</button>
);

export default NextButton;