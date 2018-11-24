import React, { Component } from 'react';
import './App.css';


class App extends Component {

  score = 0;
  hasBegun = false;

  render() {
    return (
      <div className="App">
        <header>
            <title>Word Game</title>
        </header>

        <p>
          Score : {this.score}
        </p>

      {this.showStartingImage()}
      <br/>
        
      {this.showStartingButton()}
        

      {this.showTextBox()}
      </div>
    );
  }

  beginButtonOnClickHandler(hasBegun){
    hasBegun = true;
    console.log(this.hasBegun)
  }

  showStartingButton(){
    console.log(this.hasBegun);
    if(!this.hasBegun){
      return (<button onClick={this.beginButtonOnClickHandler.bind(this.hasBegun)}>BEGIN</button>)
    }
    return;
  }

  onSubmit(){

  }

  showStartingImage(){
    if(!this.hasBegun){
      return(<img src={ require('./assets/PhotoMemo.gif' )} />);
    }
    return;
  }

  verifyAnswer(){

  }

  showTextBox(){
    if(this.hasBegun){
      return (  
        <form onSubmit={this.onSubmit()}>
          <input type="text"/>
        </form>);
    }
  }

}

export default App;
