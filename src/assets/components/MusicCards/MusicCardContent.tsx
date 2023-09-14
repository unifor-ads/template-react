import MusicTitle from './MusicTitle';
import MusicDescription from './MusicDescription';

interface musicCardContentProps {
	title: string;
	description: string;
}

const MusicCardContent = ({ title, description }: musicCardContentProps) => {
	return (
		<div className='text-contrast'>
			<div className='text-content'>
				<MusicTitle>{title}</MusicTitle>
				<MusicDescription>{description}</MusicDescription>
			</div>
		</div>
	);
};

export default MusicCardContent;
