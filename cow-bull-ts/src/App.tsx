// === default
import React, { FC, useEffect, useState, useCallback, useContext} from 'react';

// === components
import Moves from './components/Moves/Moves';
import NumInput from './components/NumInput/NumInput';
import WarningsContainer from './components/Warning/WarningsContainer';
import CowBulls from './components/CowBulls/CowBulls';
//import WarningState from './context/warning/WarningState';
import WarningContext from './context/warning/warningContext';

//& comments description
//* === DONE
//~ === IN PROGRESS
//! === TO DO
//!!! === TO DO (VERY IMPORTANT)
//^ === comment for code

//* TODO 1: refactor the form submission === DONE
//* TODO 2: make win condition === DONE
//* TODO 3 return moves increment === DONE
//~ TODO: refactor App component to FC
//* !!! TODO: solve useEffect problem === DONE
//!!! TODO: Fix starting comparings after starting new game
//! TODO: Add hint system

interface IAppState {
  moves: number
  currentNumber: number
  enteredNumber: number
  gameData: {
    cows: number
    bulls: number
  }
  incorrectNumbers: number[]
};

const App: FC = () => {
  const [data, setData] = useState<IAppState>(
    {
      moves: 0,
      currentNumber: 0,
      enteredNumber: 0,
      gameData: {
        cows: 0,
        bulls: 0
      },
      incorrectNumbers: [],
    }
  );

  const warning = useContext(WarningContext);

  //^ === state lifting up ===
  const handleCallBack = async (childData: number): Promise<void> => {
    console.log("Getting the number to from input");
    await setData({ ...data, enteredNumber: childData });
  };

  const generateNumber = useCallback(
    (): void => {
      let digits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let arr: number[] = [];

      for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * digits.length);
        if (i === 0 && index === 0) index++;
        arr.push(digits[index]);
        digits.splice(index, 1);
      }

      setData({
        ...data,
        currentNumber: +arr.join(''),
        incorrectNumbers: digits
      });
      console.log(`generating number... ${+arr.join('')}: ${data.currentNumber}`);
    },
    [data, setData]
  );

  //^ ===
  // const displayMessage = useCallback(
  //   async (messages: string[], ms: number): Promise<void> => {
  //     Promise.resolve(messages)
  //       .then(() => {
  //         setTimeout(() => setData({ ...data, warnings: [...messages] }), 0);
  //       })
  //       .then(() => {
  //         setTimeout(() => setData({ ...data, warnings: [] }), ms);
  //       });
  //   },
  //   [data, setData]);

  const areRepeatedDigits = (n: number): boolean => (/([0-9]).*?\1/).test(n.toString());

  // const startNewGame = useCallback(
  // (): void => {
  //     setData({
  //       moves: 0,
  //       currentNumber: 0,
  //       enteredNumber: 0,
  //       gameData: {
  //         cows: 0,
  //         bulls: 0
  //       },
  //       incorrectNumbers: [],
  //       warnings: [],
  //       isWin: false
  //     });
  //     generateNumber();
  //   },
  //   [generateNumber, setData]
  // )

  const startNewGame = useCallback((): void => {
    setData({
      moves: 0,
      currentNumber: 0,
      enteredNumber: 0,
      gameData: {
        cows: 0,
        bulls: 0
      },
      incorrectNumbers: [],
    });
    generateNumber();
    warning.show("Game Started!", 'success');
  }, [generateNumber, warning]);

  const compareNumbers = useCallback(
    (): void => {
      console.log("Comparing the numbers...");
      //^ === [0] -> is 4 digits
      //^ === [1] -> has repeated digits
      const criterions: boolean[] = [false, false];
      const warningsTexts: string[] = [];
      if (data.enteredNumber < 1000 ||
        data.enteredNumber > 10000) {
        warningsTexts.push("The number is non 4-digit");
      } else {
        criterions[0] = true;
      }

      if (areRepeatedDigits(data.enteredNumber)) {
        warningsTexts.push("The number has repeated digits");
      } else {
        criterions[1] = true
      }

      if (criterions.every(el => el)) {
        setData({
          ...data,
          moves: data.moves++,
          // warnings: []
        });
        console.log(`comparing: ${data.currentNumber}: ${data.enteredNumber}`);
        
        if (data.currentNumber === data.enteredNumber) {
          warning.show("YOU WIN!", 'success');
          console.warn("WIN");
          setData({
            ...data,
            moves: 0,
            currentNumber: 0,
            enteredNumber: 0,
            gameData: {cows: 0, bulls: 0}
          })
          
          setTimeout(() => startNewGame(), 2000);
          // displayMessage(["YOU WIN!!"], 2000);
        } else {
          const currNumArr = data.currentNumber.toString().split('');
          const inpNumArr = data.enteredNumber.toString().split('');
          let cows = 0, bulls = 0;
          for (let i = 0; i < 4; i++) {
            if (currNumArr[i] === inpNumArr[i]) {
              bulls++;
            } else if (inpNumArr.includes(currNumArr[i], 0)) {
              cows++;
            }
          }
          setData({
            ...data,
            gameData: {
              cows, bulls
            }
          });
        }
      } else {
        const resMessage = warningsTexts.join(" and ");
        warning.show(resMessage, 'warning');
        // displayMessage([...warningsTexts], 2000);
        setData({ ...data, gameData: { cows: 0, bulls: 0 } });
      }
    },
    [data, setData, warning]
  );

  // componentDidMount
  useEffect(() => {
    console.log("effect-start");
    generateNumber();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("effect-comparing");
    if (data.enteredNumber !== 0) compareNumbers();
  }, [data.enteredNumber]);

  return (
    <main className="container">
        <h1>Cow-Bull game</h1>
        <h3>React+Typescript version</h3>
        <Moves moves={data.moves} />
        <WarningsContainer/>
        <NumInput parentCallBack={handleCallBack} number={data.currentNumber} />
        <button onClick={() => startNewGame()}>restart game</button>
        <CowBulls cows={data.gameData.cows} bulls={data.gameData.bulls} />
    </main>
  )
}

export default App;
