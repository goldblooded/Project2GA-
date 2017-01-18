import React, { Component } from 'react';

let arr = ['The only bad workout is the one you did not do.', 'Sweat is magic.',
'Be stronger than your excuses.', 'Look better naked.', 'Eat less sugar, you are sweet already.',
'Shut up and train.'];

class Quotes extends Component {
  randomQuote () {
    console.log('here');
    let index = Math.floor(Math.random()* 10) % arr.length;
    let quote = arr[index];
    console.log(quote);
    return quote;
  }

  render() {
    console.log('in render');
    return ( <h1> {this.randomQuote()} </h1>);
  }

}

export default Quotes;


