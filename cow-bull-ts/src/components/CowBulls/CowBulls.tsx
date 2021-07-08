import React, {FC} from 'react';
import { ICowBullsProps } from '../interfaces/interfaces';

const CowBulls: FC<ICowBullsProps> = (props: ICowBullsProps) => {
	const {cows, bulls} = props;

	return (
		<section>
			<p>Cows: {cows}</p>
			<p>Bulls: {bulls}</p>
		</section>
	);
};

export default CowBulls;