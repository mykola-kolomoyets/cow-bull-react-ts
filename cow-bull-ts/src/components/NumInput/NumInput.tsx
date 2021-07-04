import React, { FC, useState } from 'react';

interface INumInputProps {
	parentCallBack: (childData: number) => void
}
const NumInput: FC<INumInputProps> = (props) => {
	const [input, setInput] = useState<number>(0);

	return (
		<form action="#"
		onSubmit={async (e: React.SyntheticEvent) => {
			e.preventDefault();
			props.parentCallBack(input);
			await setInput(0);
			//console.log("Number: ", input);
		}}>
			<input type="number"
			placeholder="Enter the number"
			name="number"
			value={input}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
				setInput(+e.target.value);
				//console.log("changed: ", +e.target.value);
			}} />
			<button type="submit" name="number">Check the number</button>
		</form>
	)
}

export default NumInput;