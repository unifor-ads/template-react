import { useState } from 'react';
import './App.css';

import { Navbar } from './assets/components/Navbar';
import { SectionHeader } from './assets/components/SectionHeader';
import { MusicCards } from './assets/components/MusicCards';
import { Section } from './assets/components/Section';

import { musics } from './assets/mockData/musics';

function App() {
	return (
		<>
			<Navbar />
			<SectionHeader>Descubra sua nova música favorita.</SectionHeader>
			<Section>
				<MusicCards musics={musics} />
			</Section>
		</>
	);
}

export default App;
