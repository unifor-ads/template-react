import './Home.css';

import MusicCards from '../../components/MusicCards';
import { Section, SectionHeader } from '../../components/Section';

import { tracks } from '../../mockData/tracks';

const Home = () => {
	return (
		<>
			<SectionHeader>Descubra sua nova música favorita.</SectionHeader>
			<Section>
				<MusicCards tracks={tracks} />
			</Section>
		</>
	);
};

export default Home;
