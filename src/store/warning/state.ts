import { WarningState, WarningType } from 'types';

const warningInitialState: WarningState = {
  text: '',
  isShown: false,
  type: WarningType.warning
};

export default warningInitialState;
