import React from 'react'

import { annulateState } from 'store/game/gameSlice';
import { useAppDispatch } from 'store/hooks';

const RestartGame = () => {
    const dispatch = useAppDispatch();
    return (
        <button onClick={() => dispatch(annulateState())}>RestartGame</button>
    )

}

export default RestartGame;