import MusicImg from './MusicImg';
import MusicCardContent from './MusicCardContent';

export interface MusicCardProps {
	thumbnail: string;
	title: string;
	description: string;
	href: string;
}

const MusicCard = ({ thumbnail, title, description, href }: MusicCardProps) => {
	return (
		<div className='col'>
			<div className='music-card mt-4'>
				<a href={href}>
					<MusicImg src={thumbnail} />
					<MusicCardContent title={title} description={description} />
				</a>
			</div>
		</div>
	);
};

export default MusicCard;
