import React, {FC} from 'react';
import { ICowBullsProps } from 'types';

const CowBulls: FC<ICowBullsProps> = (props: ICowBullsProps) => {
	const {cows, bulls} = props;

	return (
		<section className="w-36 flex mx-auto">
			<p className="mx-auto text-md mx-3 my-2">Cows: {cows}</p>
			<p className=" mx-auto text-md mx-3 my-2">Bulls: {bulls}</p>
		</section>
	);
};

export default CowBulls;