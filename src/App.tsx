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
} from 'store/game/slice';
import { useAppSelector ,useAppDispatch } from 'store/hooks';
import styles from './App.module.scss';
import { Hint } from 'components/Hint';
import { batch } from 'react-redux';

const App = () => {
  const { moves } = useAppSelector(state => state.game);
  const { cows, bulls } = useAppSelector(state => state.game.gameData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const {
      number, 
      incorrectNumbers
    } = generateNumber();

    batch(() => {
      dispatch(setCurrentNumber(number));
      dispatch(setIncorrectNumbers(incorrectNumbers))
    });
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <WarningContainer />
        <Moves moves={moves}/>
        <Input />
        {(moves > 0 && !(moves % 5)) && <Hint/>}
        <CowBulls cows={cows} bulls={bulls} />
        <History/>
      </div>
    </div>
  );
}

export default App;
