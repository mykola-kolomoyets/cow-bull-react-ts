import React, { FC, useState } from 'react';
import { INumInputProps } from 'types/types';

const NumInput: FC<INumInputProps> = (props) => {
	const [input, setInput] = useState<number>(0);

	const submitHandler = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		props.parentCallBack(input);
		await setInput(0);
	};
	return (
		<form
			action="#"
			onSubmit={submitHandler}
		>
			<input
				type="number"
				placeholder="Enter the number"
				name="number"
				value={input}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(+e.target.value);
					console.log('changed: ', input);
				}}
			/>
			<button type="submit" name="number">
				Check the number
			</button>
		</form>
	);
};

export default NumInput;
