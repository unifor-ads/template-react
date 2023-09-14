import './Card.css';

interface cardProps {
	children: React.ReactNode;
	className?: string;
}

export const Card = ({ children, className = '' }: cardProps) => {
	return <div className={`component card ${className}`}>{children}</div>;
};
