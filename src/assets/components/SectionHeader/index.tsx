import React from 'react';
import { Section } from '../Section';

interface sectionHeaderProps {
	children: React.ReactNode;
}

export const SectionHeader = ({ children }: sectionHeaderProps) => {
	return (
		<Section>
			<h2>
				<strong>{children}</strong>
			</h2>
		</Section>
	);
};
