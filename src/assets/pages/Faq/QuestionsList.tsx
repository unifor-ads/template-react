import { QuestionAndAnswer } from './QuestionAndAnswer';
import { questionAndAnswerProps } from './QuestionAndAnswer';

interface questionsListProps {
	questions: questionAndAnswerProps[];
}

export const QuestionsList = ({ questions }: questionsListProps) => {
	return (
		<div className='accordion accordion-flush' id='accordionPanelsStayOpenExample'>
			{questions.map((question) => (
				<QuestionAndAnswer
					question={question.question}
					answer={question.answer}
					answerList={question.answerList}
				/>
			))}
		</div>
	);
};
