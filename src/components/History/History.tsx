import React, { useMemo, VFC } from 'react';

import { useAppSelector } from 'store/hooks';

import HistoryItemComponent from './HistoryItem';

import styles from './History.module.scss';

const History: VFC = () => {
  const { history } = useAppSelector(state => state.game);

  const historyElements = useMemo(() => history.map((props) => (
    <HistoryItemComponent key={props.number} {...props}/>
  )).reverse(), [history]);

  return historyElements?.length ? (
    <section className={styles.history}>
      <h2 className={styles.title}>History</h2>

      <table className={styles.historyTable}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Cows 🐄 </th>
            <th>Bulls 🐂</th>
          </tr>
        </thead>

        <tbody>
          { historyElements }
        </tbody>
      </table>

    </section>
  ) : <span>You have not entered the number</span>  ;
};

export default History;