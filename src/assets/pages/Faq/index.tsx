import './Faq.css';

import { SectionHeader } from '../../components/SectionHeader';
import { Section } from '../../components/Section';
import { QuestionsList } from './QuestionsList';

import { faqs } from '../../mockData/faqs';

const Faq = () => {
	return (
		<>
			<SectionHeader>Perguntas Frequentes</SectionHeader>
			<Section>
				<QuestionsList questions={faqs} />
			</Section>
		</>
	);
};

export default Faq;
