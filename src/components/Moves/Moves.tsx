import React, { VFC } from 'react';
import { useAppSelector } from 'store/hooks';
import styles from './Moves.module.scss';


const Moves: VFC = () => {
  const { moves } = useAppSelector(state => state.game);

  return (
    <div className={styles.moves}>
      <h3 className={styles.movesTitle}>
        Your moves: <span className={styles.movesText}>{moves}</span>
      </h3>
    </div>
  );
};

export default Moves;