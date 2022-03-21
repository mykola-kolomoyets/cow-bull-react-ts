import React, { VFC } from 'react';
import './Hint.styles.scss';

import { useAppSelector } from 'store/hooks';

const Hint: VFC = () => {
  const { game: { incorrectNumbers, moves } } = useAppSelector(state => state);

  const numbers = incorrectNumbers.join('  ');

  return moves > 0 && !(moves % 5) ? (
    <div className="hint">
      <p className="hint__title">HINT:</p>

      <p className="hint__subtitle">These digits are NOT in the number</p>

      <span className="hint__content">{numbers}</span>
    </div>
  ) : null;
};

export { Hint };
