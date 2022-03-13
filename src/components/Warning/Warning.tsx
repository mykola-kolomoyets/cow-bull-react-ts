import React, { FC } from 'react';
import { WarningProps } from 'types';

const Warning: FC<WarningProps> = ({ text }) => <p>{text}</p>;

export default Warning;