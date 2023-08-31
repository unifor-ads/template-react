import { v4 as uuidv4 } from 'uuid';

export interface questionAndAnswerProps {
	question: string;
	answer: string;
	answerList?: string[];
}

export const QuestionAndAnswer = ({ question, answer, answerList }: questionAndAnswerProps) => {
	const id = uuidv4();
	// const id = '001';

	return (
		<div className='accordion-item bg-dark'>
			<h2 className='accordion-header'>
				<button
					className='accordion-button collapsed bg-dark'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target={`#${id}`}
					aria-expanded='false'
					aria-controls='flush-collapseOne'
				>
					{question}
				</button>
			</h2>
			<div id={id} className='accordion-collapse collapse'>
				<div className='accordion-body'>
					<p>{answer}</p>
					{answerList && answerList.map((item) => <li>{item}</li>)}
				</div>
			</div>
		</div>
	);
};
