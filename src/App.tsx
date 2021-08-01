import React, { useEffect } from 'react';
import Input from 'components/Input';
import { generateNumber } from 'utils';
import Moves from 'components/Moves';
import CowBulls from 'components/CowBulls';
import History from 'components/History';
import Header from 'components/Header';
import WarningContainer from 'components/Warning/WarningsContainer';
import {
  setCurrentNumber,
  setIncorrectNumbers
} from 'store/game/gameSlice';
import { useAppSelector ,useAppDispatch } from 'store/hooks';
import styles from './App.module.scss';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <WarningContainer />
        <Moves moves={moves}/>
        <Input />
        <CowBulls cows={cows} bulls={bulls} />
        <History/>
      </div>
    </div>
  );
}

export default App;
