import React, { Component } from 'react';
import './App.css';


class App extends Component {

  score = 0;

  render() {
    return (
      <div className="App">
        <header>
            <meta charset="utf-8" />
            <title>Word Game</title>
        </header>

        <p>
          Score : {this.score}
        </p>

      <img src={ require('../assets/PhotoMemo.gif' )} />
      <br/>
      <button id="beginButton" onclick={this.beginButtonOnClickHandler()}>BEGIN</button>

      <form onsubmit={this.onSubmit()}>
          <input type="text"/>
      </form>
      </div>
    );
  }

  beginButtonOnClickHandler(){

  }

  onSubmit(){

  }

  verifyAnswer(){

  }
}

export default App;
