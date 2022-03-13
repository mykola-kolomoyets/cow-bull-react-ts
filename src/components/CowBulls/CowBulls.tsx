import React, { FC } from 'react';

import { CowBullsProps } from 'types';

import styles from './CowBulls.module.scss';

const CowBulls: FC<CowBullsProps> = ({ cows, bulls }) => (
  <section className={styles.gameData}>
    <p>🐄: {cows}</p>
		
    <p>🐂: {bulls}</p>
  </section>
);

export default CowBulls;