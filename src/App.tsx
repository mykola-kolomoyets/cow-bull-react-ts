import React, { useEffect } from 'react';
import Input from 'components/Input';
import { generateNumber } from 'utils';
import Moves from 'components/Moves';
import RestartGame from 'components/RestartGame';
import CowBulls from 'components/CowBulls';
import History from 'components/History';
import Header from 'components/Header';
import WarningContainer from 'components/Warning/WarningsContainer';
import {
  setCurrentNumber,
  setIncorrectNumbers
} from 'store/game/gameSlice';
import { useAppSelector ,useAppDispatch } from 'store/hooks';

const App = () => {
  const {
    game: {
      moves,
      gameData: {
        cows,
        bulls
      }
    }
  } = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const {
      number, 
      incorrectNumbers
    } = generateNumber();

    dispatch(setCurrentNumber(number));
    dispatch(setIncorrectNumbers(incorrectNumbers))
  }, []);

  return (
    <div className="sm:container sm:mx-auto my-auto mx-4-auto p-10 border-4 border-blue-500 box-border relative top-9 rounded">
      <div className="w-96 flex-column mx-auto">
        <Header />
        <WarningContainer />
        <Moves moves={moves}/>
        <Input />
        {/* <RestartGame /> */}
        <CowBulls cows={cows} bulls={bulls} />
        <History/>
      </div>
      
    </div>
  );
}

export default App;
