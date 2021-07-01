import * as React from 'react';

interface IAppState {
  moves: number
  currentNumber: number
  gameData: {
    cows: number
    bulls: number
  }
  incorrectNumbers: number[]
  warnings: string[]
};

class App extends React.Component<IAppState> {
  render() {
    return (
      <>
        <h1>Cow-Bull-game</h1>
      </>
    )
  }
}

export default App;
