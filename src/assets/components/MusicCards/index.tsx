import './music-card.css';

import { MusicCard, MusicCardProps } from './MusicCard';

interface MusicCardsProps {
	musics: {
		name: string;
		artist: string;
		imgSrc: string;
	}[];
}

export const MusicCards = ({ musics: musics }: MusicCardsProps) => {
	return (
		<div className='row row-cols-5 mt-4'>
			{musics.slice(0, 5).map((music) => (
				<MusicCard
					title={music.name}
					description={music.artist}
					imgSrc={music.imgSrc}
					href={'#'}
				/>
			))}
		</div>
	);
};
