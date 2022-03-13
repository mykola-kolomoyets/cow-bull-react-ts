import React, { VFC } from 'react';
import './Hint.styles.scss';

import { useAppSelector } from 'store/hooks';

const Hint: VFC = () => {
  const { game: { incorrectNumbers } } = useAppSelector(state => state);

  return (
    <div className="hint">
      <p className="hint__title">HINT:</p>

      <p className="hint__subtitle">These digits are NOT in the number</p>

      <span className="hint__content">{incorrectNumbers.join('  ')}</span>
    </div>
  );
};

export { Hint };
