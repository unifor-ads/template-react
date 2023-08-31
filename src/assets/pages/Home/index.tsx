import './Home.css';

import { SectionHeader } from '../../components/SectionHeader';
import { MusicCards } from '../../components/MusicCards';
import { Section } from '../../components/Section';

import { musics } from '../../mockData/musics';

const Home = () => {
	return (
		<>
			<SectionHeader>Descubra sua nova música favorita.</SectionHeader>
			<Section>
				<MusicCards musics={musics} />
			</Section>
		</>
	);
};

export default Home;
