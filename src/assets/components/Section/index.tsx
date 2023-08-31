import './section.css'

interface sectionProps {
	children: React.ReactNode;
}

export const Section = ({ children }: sectionProps) => {
	return <section className='container mt-2'>{children}</section>;
};
