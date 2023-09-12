import './MusicCard.css';

interface MusicTitleProps {
	children: React.ReactNode;
}

const MusicTitle = ({ children }: MusicTitleProps) => {
	return <h3 className='music-card-title'>{children}</h3>;
};

export default MusicTitle;
