import React, { FC, useState } from 'react';

// import { useSelector, useDispatch } from 'react-redux';
import {
  incrementMoves,
  setEnteredNumber
} from 'store/game/gameSlice';
import { useAppDispatch } from 'store/hooks';

const Input: FC<{}> = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(incrementMoves());
    dispatch(setEnteredNumber(+value));
    setValue("");
  }

  return (
    <section className="input">
      <form
        action="#"
        onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={value}
          maxLength={4}
        />
        <button type="submit">CheckNumber</button>
      </form>

    </section>
  )
}

export default Input;