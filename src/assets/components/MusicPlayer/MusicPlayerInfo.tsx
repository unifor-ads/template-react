interface musicPlayerInfo {
	music: {
		name: string;
		artist: string;
	};
}

const MusicPlayerInfo = ({ music }: musicPlayerInfo) => {
	return (
		<div className='music-player-info col'>
			<h3>{music.name}</h3>
			<h5>{music.artist}</h5>
			<h5>
				<i className='bi bi-star'></i>
			</h5>
		</div>
	);
};

export default MusicPlayerInfo;
