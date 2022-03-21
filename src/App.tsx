import React, { useEffect } from 'react';
import { batch } from 'react-redux';

import { generateNumber } from 'utils';

import { setCurrentNumber, setIncorrectNumbers } from 'store/game/slice';
import { useAppDispatch } from 'store/hooks';

import Input from 'components/Input';
import Moves from 'components/Moves';
import CowBulls from 'components/CowBulls';
import History from 'components/History';
import Header from 'components/Header';
import WarningContainer from 'components/Warning/WarningsContainer';
import { Hint } from 'components/Hint';

import styles from './App.module.scss';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { number, incorrectNumbers } = generateNumber();

    batch(() => {
      dispatch(setCurrentNumber(number));
      dispatch(setIncorrectNumbers(incorrectNumbers));
    });
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <WarningContainer />
        <Moves />
        <Input />
        <Hint />
        <CowBulls />
        <History />
      </div>
    </div>
  );
};

export default App;
