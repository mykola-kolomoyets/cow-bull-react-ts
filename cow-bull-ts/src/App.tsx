import React from 'react';
import Input from 'components/Input';
import { generateNumber } from 'utils';
import RestartGame from 'components/RestartGame/RestartGame';
const App = () => {

  return (
    <div className="App">
      <Input />
      <RestartGame />
    </div>
  );
}

export default App;
