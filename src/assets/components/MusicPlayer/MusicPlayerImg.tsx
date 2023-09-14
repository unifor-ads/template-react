import './MusicPlayer.css';

interface MusicPlayerImgProps {
	src: string;
	alt?: string;
}

const MusicPlayerImg = ({ src, alt }: MusicPlayerImgProps) => {
	return (
		<picture className='music-player-img col col-4'>
			<img src={src} alt={alt || ''}></img>
		</picture>
	);
};

export default MusicPlayerImg;
