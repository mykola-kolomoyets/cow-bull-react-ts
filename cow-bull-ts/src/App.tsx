import React, { FC, useEffect, useMemo, useState, useCallback} from 'react';
import Moves from './components/Moves/Moves';
import NumInput from './components/NumInput/NumInput';
import WarningsContainer from './components/Warning/WarningsContainer';
import CowBulls from './components/CowBulls/CowBulls';

//* TODO 1: refactor the form submission === DONE
//* TODO 2: make win condition === DONE
//^ TODO: refactor App component to FC
//!!! TODO: solve useEffect problem
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
  warnings: string[],
  isWin: boolean
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
      warnings: [],
      isWin: false
    });



  const handleCallBack = async (childData: number): Promise<void> => {
    console.log("Getting the number to from input");
    await setData({ ...data, enteredNumber: childData });
  }

  const generateNumber = useCallback(
    (): void => {
      console.log("generating number...");
      
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
  
    },
    [data, setData]
  )

  const displayMessage = useCallback(async (messages: string[], ms: number): Promise<void> => {
    Promise.resolve(messages)
      .then(() => {
        setTimeout(() => setData({ ...data, warnings: [...messages] }), 0);
      })
      .then(() => {
        setTimeout(() => setData({ ...data, warnings: [] }), ms);
      });
  }, [data, setData])

  const areRepeatedDigits = (n: number): boolean => (/([0-9]).*?\1/).test(n.toString());

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
      warnings: [],
      isWin: false
    });
    generateNumber();
  }, [generateNumber, setData])

  const compareNumbers = useCallback(
    (): void => {
      console.log("Comparing the numbers...");
      // [0] -> is 4 digits
      // [1] -> has repeated digits
      const criterias: boolean[] = [false, false];
      const warningsTexts: string[] = [];
      console.log(`My: ${data.enteredNumber}, Correct: ${data.currentNumber}`);
  
      if (data.enteredNumber < 1000 ||
        data.enteredNumber > 10000) {
        warningsTexts.push("The number is non 4-digit");
      } else {
        criterias[0] = true;
      }
  
      if (areRepeatedDigits(data.enteredNumber)) {
        warningsTexts.push("The number has repeated digits");
      } else {
        criterias[1] = true
      }
  
      if (criterias.every(el => el)) {
        setData({
          ...data,
          moves: data.moves + 1,
          warnings: []
        });
        if (data.currentNumber === data.enteredNumber) {
          displayMessage(["YOU WIN!!"], 2000);
          setData({...data, isWin: true});
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
        displayMessage([...warningsTexts], 2000);
        setData({ ...data, gameData: { cows: 0, bulls: 0 } });
      }
    },
    [data, setData, displayMessage, startNewGame]
  );

  
  // componentDidMount
  useEffect(() => {
    console.log("effect-start");
    generateNumber();
  }, []);

  useMemo(() => {
    console.log("memo");
    startNewGame();
  }, [data.isWin]);

  useEffect(() => {
    console.log("effect-comparing");
    compareNumbers();
  },
  [data.enteredNumber]);

  return (
    <>
      <h1>Cow-Bull game</h1>
      <h3>React+Typescript version</h3>
      <Moves moves={data.moves} />
      <NumInput parentCallBack={handleCallBack} />
      <button onClick={startNewGame}>restart game</button>
      <WarningsContainer warnings={data.warnings} />
      <CowBulls cows={data.gameData.cows} bulls={data.gameData.bulls} />
    </>
  )
}

export default App;
