import './section.css';

interface sectionProps {
	children: React.ReactNode;
	className: string;
}

export const Section = ({ children, className }: sectionProps) => {
	return <section className={`container mt-4 ${true && className}`}>{children}</section>;
};
