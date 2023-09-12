import './MusicCard.css';

interface MusicImgProps {
	src: string;
	alt?: string;
}

const MusicImg = ({ src, alt }: MusicImgProps) => {
	return (
		<picture className='music-card-img'>
			<img src={src} alt={alt || ''}></img>
		</picture>
	);
};

export default MusicImg;
