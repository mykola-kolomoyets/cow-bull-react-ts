import React, {FC} from 'react';
import { ICowBullsProps } from 'types';
import styles from './CowBulls.module.scss';

const CowBulls: FC<ICowBullsProps> = (props: ICowBullsProps) => {
	const {cows, bulls} = props;

	return (
		<section className={styles.gameData}>
			<p>🐄: {cows}</p>
			<p>🐂: {bulls}</p>
		</section>
	);
};

export default CowBulls;