import React, { FC, useState } from 'react';

interface INumInputProps {
	parentCallBack: (childData: number| undefined) => void
}


const NumInput: FC<INumInputProps> = (props) => {
	const [input, setInput] = useState<number>(0);

	return (
		<form action="#"
		onSubmit={(e) => {
			}}
		name="numberInput">
			<input type="number"
				placeholder="Enter the number"
				name="numberInput"
				value={input}
				onChange={(e) => {
					setInput(+e.target.value);
					props.parentCallBack(+e.target.value);
				}}
				/>
		</form>
	)
}

export default NumInput;