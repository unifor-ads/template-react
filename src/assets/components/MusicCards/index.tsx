import './MusicCard.css';

import MusicCard from './MusicCard';

interface MusicCardsProps {
	tracks: {
		name: string;
		artist: string;
		thumbnail: string;
		href: string;
	}[];
}

const MusicCards = ({ tracks: tracks }: MusicCardsProps) => {
	return (
		<div className='row row-cols-lg-5 row-cols-md-3 row-cols-2'>
			{tracks.slice(0, 5).map((track) => (
				<MusicCard
					title={track.name}
					description={track.artist}
					thumbnail={track.thumbnail}
					href={track.href}
				/>
			))}
		</div>
	);
};

export default MusicCards;
