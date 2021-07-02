import React, { FC, useState } from 'react';

interface INumInputProps {
	parentCallBack: (childData: number| undefined) => void
}


const NumInput: FC<INumInputProps> = (props) => {
	const [input, setInput] = useState<number| undefined>(undefined);
	//const getInput = (): number| undefined => input;

	return (
		<form action="#">
			<input type="number"
				placeholder="Enter the number"
				name="numberInput"
				onChange={(e) => {
					setInput(+e.target.value);
					props.parentCallBack(+e.target.value);
				}} />
		</form>
	)
}

export default NumInput;