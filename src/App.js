import React, { Component } from 'react';
import BackToAccount from './components/Clickables/BackToAccount';
import ChildNameForm from './components/Forms/ChildNameForm';
import BirthdayForm from './components/Forms/BirthdayForm';
import GenderForm from './components/Forms/GenderForm';
import RelationshipForm from './components/Forms/RelationshipForm';

import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 'name', // should be name initially.
      firstName: '',
      lastName: '',
      birthday: null,
      gender: '',
      relationship: '',
    }

    this.handleNameSubmit = this.handleNameSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDateSubmit = this.handleDateSubmit.bind(this);
    this.handleGenderSelect = this.handleGenderSelect.bind(this);
    this.displayState = this.displayState.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleNameSubmit(e) {
    if (this.state.firstName && this.state.lastName) {
      this.setState({ progress: 'birthday' })
    }
  }

  handleDateSubmit(e) {
    if(this.state.birthday) {
      this.setState({ progress: 'gender' })
    }
  }

  handleGenderSelect(e) {
    this.setState({
      [e.target.name]: e.target.value,
      progress: 'relationship'
    });
  }

  displayState() {
    // here we can make an API call to store the
    // user's info into the DB which is represented in this.state

    // for now it's just printed to std out.

    console.log(this.state);
  }

  render() {
    let componentToRender = null;
    const progress = this.state.progress;
    if (progress === 'name') {
      componentToRender = 
        <ChildNameForm
          handleNameSubmit={this.handleNameSubmit}
          handleInputChange={this.handleInputChange}
        />;
    } else if (progress === 'birthday') {
      componentToRender = 
        <BirthdayForm
          name={this.state.firstName}
          handleInputChange={this.handleInputChange}
          handleDateSubmit={this.handleDateSubmit}
        />;
    } else if (progress === 'gender') {
      componentToRender = 
        <GenderForm
          name={this.state.firstName}
          handleGenderSelect={this.handleGenderSelect}
        />;
    } else if (progress === 'relationship') {
      componentToRender = 
        <RelationshipForm
          handleInputChange={this.handleInputChange}
          gender={this.state.gender}
          displayState={this.displayState}
        />
    } else {
      componentToRender = <div className="error" >Oops! Something went wrong. Please refresh the page. Sorry about that.</div>
    }

    return (
      <div className="App">
        <BackToAccount className="back-to-account-btn"/>
        <div className="form">
          {componentToRender}
        </div>
      </div>
    );
  }
}

export default App;
