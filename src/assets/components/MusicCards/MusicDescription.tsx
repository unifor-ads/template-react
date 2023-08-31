import './MusicCard.css';

interface MusicDescriptionProps {
	children: React.ReactNode;
}

export const MusicDescription = ({ children }: MusicDescriptionProps) => {
	return <p className='music-card-description'>{children}</p>;
};
