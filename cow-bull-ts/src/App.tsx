import React from 'react';
import Moves from './components/Moves/Moves';
import NumInput from './components/NumInput/NumInput';
import WarningsContainer from './components/Warning/WarningsContainer';
import CowBulls from './components/CowBulls/CowBulls';

//* TODO 1: refactor the form submission === DONE
//* TODO 2: make win condition === DONE


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

  handleCallBack = async (childData: number): Promise<void> => {
    await this.setState({
      enteredNumber: childData
    });
    this.compareNumbers();
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
    console.log(this.state.enteredNumber, this.state.currentNumber);

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
        Promise.resolve()
        .then(() => {
          setTimeout(() => this.setState({warnings: ["YOU WIN!!!"]}), 0);
        })
        .then(res => {
          this.restartGame();
          return res;
        })
        .then(res => {
          setTimeout(() => this.setState({warnings: []}), 2000);
          return res;
        });

      } else {
        const currNumArr = this.state.currentNumber.toString().split('');
        const inpNumArr = this.state.enteredNumber.toString().split('');
        let cows = 0, bulls = 0;
        for (let i = 0; i < 4; i++) {
          if (currNumArr[i] === inpNumArr[i]) {
            bulls++;
          } else if (inpNumArr.includes(currNumArr[i], 0)) {
            cows++;
          }
        }
        this.setState({
          gameData: {
            cows, bulls
          }
        });
      }
    } else {
      this.setState({
        warnings: [...warningsTexts],
        gameData: {
          cows: 0,
          bulls: 0
        }
      });
    }
  }

  restartGame = (): void => {
    this.setState({
      moves: 0,
      currentNumber: 0,
      enteredNumber: 0,
      gameData: {
        cows: 0,
        bulls: 0
      },
      incorrectNumbers: [],
      warnings: []
    });
    this.generateNumber();
  }

  render() {
    return (
      <>
        <h1>Cow-Bull game</h1>
        <h3>React+Typescript version</h3>
        <Moves moves={this.state.moves} />
        {/* <button onClick={() => this.generateNumber()}>click me</button> */}
        <NumInput parentCallBack={this.handleCallBack} />
        
        <WarningsContainer warnings={this.state.warnings} />
        <CowBulls cows={this.state.gameData.cows} bulls={this.state.gameData.bulls} />
      </>
    )
  }
}

export default App;
