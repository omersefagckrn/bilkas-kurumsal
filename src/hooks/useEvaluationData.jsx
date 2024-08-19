import { useTranslation } from 'react-i18next';
import { EVALUATION_DATA } from '../constants';

export const useEvaluationData = () => {
	const { t } = useTranslation();

	const evaluationData = EVALUATION_DATA(t);

	return evaluationData;
};
