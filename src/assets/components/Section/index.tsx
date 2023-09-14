import './section.css';

interface sectionProps {
	children: React.ReactNode;
	className?: string;
}

export const Section = ({ children, className = '' }: sectionProps) => {
	return <section className={`container mt-4 ${true && className}`}>{children}</section>;
};

interface sectionHeaderProps {
	children: React.ReactNode;
}

export const SectionHeader = ({ children }: sectionHeaderProps) => {
	return (
		<Section className='section-header component'>
			<h2>
				<strong>{children}</strong>
			</h2>
		</Section>
	);
};
