import * as React from 'react';
import Moves from './components/Moves/Moves';
import NumInput from './components/NumInput/NumInput';
import WarningsContainer from './components/Warning/WarningsContainer';

interface IAppState {
  moves: number
  currentNumber: number
  enteredNumber: number
  gameData: {
    cows: number
    bulls: number
  }
  incorrectNumbers: number[]
  warnings: string[]
};

class App extends React.Component<{}, {}> {
  state: IAppState = {
    moves: 0,
    currentNumber: 0,
    enteredNumber: 0,
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

  handleCallBack = (childData: number | undefined) => {
    this.setState({
      enteredNumber: childData
    });
  }

  generateNumber = (): void => {
    let digits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    });
  }

  areRepeatedDigits = (n: number): boolean => (/([0-9]).*?\1/).test(n.toString());

  compareNumbers = (): void => {
    // [0] -> is 4 digits
    // [1] -> has repeated digits
    const criterias: boolean[] = [false, false];
    const warningsTexts: string[] = [];
    console.log(this.state.enteredNumber);

    if (this.state.enteredNumber < 1000 ||
      this.state.enteredNumber > 10000) {
      warningsTexts.push("The number is non 4-digit");
    } else {
      criterias[0] = true;
    }

    if (this.areRepeatedDigits(this.state.enteredNumber)) {
      warningsTexts.push("The number has repeated digits");
    } else {
      criterias[1] = true
    }

    if (criterias.every(el => el)) {
      this.setState({
        moves: this.state.moves + 1,
        warnings: []
      });
      if (this.state.currentNumber === this.state.enteredNumber) {
        // here will be win condition
      } else {
        const currNumArr = this.state.currentNumber.toString().split('');
        const inpNumArr = this.state.enteredNumber.toString().split('');

        for (let i = 0; i < 4; i++) {
          if (currNumArr[i] === inpNumArr[i]) {
            this.setState({bulls: this.state.gameData.bulls+1});
          } else if (inpNumArr.includes(currNumArr[i], 0)) {
            this.setState({cows: this.state.gameData.cows + 1});
          }
        }
      }
    } else {
      this.setState({ warnings: [...warningsTexts] });
    }
  }

  // getWarnings = (): JSX.Element[] => {
  //   let key = 0;
  //   return (this.state.warnings.length > 0) ? (
  //     this.state.warnings.map(text => <Warning text={text} key={key++} />)
  //   ) : [];
  // }

  render() {
    return (
      <>
        <h1>Cow-Bull game</h1>
        <h3>React+Typescript version</h3>
        <Moves moves={this.state.moves} />
        {/* <button onClick={() => this.generateNumber()}>click me</button> */}
        <NumInput parentCallBack={this.handleCallBack} />
        <button onClick={(e) => {
          e.preventDefault();
          this.compareNumbers();
        }}>Check the number</button>
        <WarningsContainer warnings={this.state.warnings}/>
      </>
    )
  }
}

export default App;
