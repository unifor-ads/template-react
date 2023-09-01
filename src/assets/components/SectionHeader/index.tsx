import './SectionHeader.css';

import { Section } from '../Section';

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
