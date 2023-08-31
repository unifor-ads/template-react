import './MusicCard.css';

import { MusicCard, MusicCardProps } from './MusicCard';

interface MusicCardsProps {
	musics: {
		name: string;
		artist: string;
		imgSrc: string;
		href: string;
	}[];
}

export const MusicCards = ({ musics: musics }: MusicCardsProps) => {
	return (
		<div className='row row-cols-lg-5 row-cols-md-3 row-cols-2'>
			{musics.slice(0, 5).map((music) => (
				<MusicCard
					title={music.name}
					description={music.artist}
					imgSrc={music.imgSrc}
					href={music.href}
				/>
			))}
		</div>
	);
};
