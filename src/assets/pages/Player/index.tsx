// import './Player.css';

import { Section } from '../../components/Section';
import MusicPlayer from '../../components/MusicPlayer';
import AudioPlayer from '../../components/AudioPlayer';

import { tracks } from '../../mockData/tracks';

const Player = () => {
	return (
		<>
			<Section>
				<AudioPlayer tracks={tracks} />
			</Section>
		</>
	);
};

export default Player;
