import React, { VFC } from 'react';
import { useAppSelector } from 'store/hooks';

import styles from './CowBulls.module.scss';

const CowBulls: VFC = () => {
  const { cows, bulls } = useAppSelector(state => state.game.gameData);

  return (
    <section className={styles.gameData}>
      <p>🐄: {cows}</p>

      <p>🐂: {bulls}</p>
    </section>
  );
};

export default CowBulls;