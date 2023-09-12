import './MusicCard.css';

interface MusicDescriptionProps {
	children: React.ReactNode;
}

const MusicDescription = ({ children }: MusicDescriptionProps) => {
	return <p className='music-card-description'>{children}</p>;
};

export default MusicDescription;
