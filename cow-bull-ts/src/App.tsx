import * as React from 'react';
import Moves from './components/Moves/Moves';
import NumInput from './components/NumInput/NumInput';
import Warning from './components/Warning/Warning';

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
    const warningsTexts: string[] = [];
    console.log(this.state.enteredNumber);

    if (this.state.enteredNumber < 1000 ||
      this.state.enteredNumber > 10000) {
      warningsTexts.push("The number is non 4-digit");
    }

    if (this.areRepeatedDigits(this.state.enteredNumber)) {
      warningsTexts.push("The number has repeated digits");
    }

    this.setState({ warnings: [...warningsTexts] });
  }

  getWarnings = (): JSX.Element[] => {
    let key = 0;
    return (this.state.warnings.length > 0) ? (
      this.state.warnings.map(text => <Warning text={text} key={key++} />)
    ) : [];
  }


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
        <div className="warnings-container">
          {this.getWarnings()}
        </div>
      </>
    )
  }
}

export default App;
