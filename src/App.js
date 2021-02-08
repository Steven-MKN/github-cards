import React, { Component } from "react";
import CardList from './CardList';
import From from './Form';

class App extends Component {
  state = {
    profiles: []
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          {this.props.title}
        </div>
        <From onSubmit={ this.addNewProfile }/>
        <CardList profiles={ this.state.profiles } />
      </div>
    );
  }
}

export default App;