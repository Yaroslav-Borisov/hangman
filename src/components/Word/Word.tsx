import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Word = () => {
	const name = useSelector((state: RootState) => state.name.name);
	console.log(name);

	return (
		<div className="word">
			{[...name].map((letter, index) => {
				return <span className="letter" key={index}></span>;
			})}
		</div>
	);
};