import { Section } from '../Section';
import MusicPlayerImg from './MusicPlayerImg';
import MusicPlayerInfo from './MusicPlayerInfo';
import AudioPlayer from '../AudioPlayer/index old';

interface musicPlayerProps {
	music: {
		name: string;
		artist: string;
		imgSrc: string;
		musicSrc: string;
		href: string;
	};
}

const MusicPlayer = ({ music }: musicPlayerProps) => {
	console.log(music);
	return (
		<Section>
			<div className='music-player'>
				<div className='row mt-4'>
					<MusicPlayerImg src={music.imgSrc} />
					<MusicPlayerInfo music={music} />
				</div>
				<div className='row mt-4'>
					<AudioPlayer src={music.musicSrc} />
				</div>
				<hr />
			</div>
		</Section>
	);
};

export default MusicPlayer;
