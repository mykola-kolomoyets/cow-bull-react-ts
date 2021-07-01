import * as React from 'react';
import Moves from './components/Moves/Moves';

interface IAppState {
  moves: number
  currentNumber: number | null
  gameData: {
    cows: number
    bulls: number
  }
  incorrectNumbers: number[]
  warnings: string[]
};

class App extends React.Component<{},{}> {
  
  
  state: IAppState = {
    moves: 0,
    currentNumber: null,
    gameData: {
      cows: 0,
      bulls: 0
    },
    incorrectNumbers: [],
    warnings: []
  }
  

  componentDidMount() {
    this.generateNumber();
  }

  generateNumber() {
    let digits: number[] = [0,1,2,3,4,5,6,7,8,9];
    let arr: number[] = [];

    for (let i = 0; i < 4; i++) {
      let index = Math.floor(Math.random() * digits.length);
      if (i === 0 && index === 0) index++;
      arr.push(digits[index]);
      digits.splice(index, 1);
    }

    this.setState({
      currentNumber: +(arr.join('')),
      incorrectNumbers: digits
    })
  }

  render() {
    return (
      <>
        <h1>Cow-Bull game</h1>
        <h3>React+Typescript version</h3>
        <Moves moves={this.state.moves}/>
        <p>{this.state.currentNumber}</p>
        <p>{this.state.incorrectNumbers}</p>
        <button onClick={() => this.generateNumber()}>click me</button>
      </>
    )
  }
}

export default App;
