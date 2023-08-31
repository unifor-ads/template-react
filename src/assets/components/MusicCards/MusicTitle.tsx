import './music-card.css'

interface MusicTitleProps {
	children: React.ReactNode;
}

export const MusicTitle = ({ children }: MusicTitleProps) => {
	return (
		<h3 className="music-card-title">{children}</h3>
	);
}