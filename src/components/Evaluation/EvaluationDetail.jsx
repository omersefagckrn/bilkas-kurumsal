import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fromKebabCase, toKebabCase } from '../../helpers/utils';
import { useEvaluationData } from '../../hooks/useEvaluationData';

const fadeIn = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const EvaluationDetail = () => {
	const EvaluationData = useEvaluationData();
	const { title } = useParams();
	const decodedTitle = fromKebabCase(decodeURIComponent(title));
	const evaluation = EvaluationData.find((item) => toKebabCase(item.title) === toKebabCase(decodedTitle));

	if (!evaluation) {
		return <div className='flex items-center justify-center h-screen text-xl text-gray-700'>Hizmet bulunamadı.</div>;
	}

	return (
		<motion.div className='container py-12 mx-auto' initial='hidden' animate='visible' variants={fadeIn}>
			<div className='flex flex-col'>
				<motion.div className='mb-4 text-4xl font-semibold leading-tight text-primary ' variants={fadeIn}>
					{evaluation.title}
				</motion.div>
				<motion.p className='font-medium leading-relaxed text-left text-black' variants={fadeIn}>
					{evaluation.description}
				</motion.p>
				<motion.p className='mt-2 font-medium leading-relaxed text-left text-gray-600' variants={fadeIn}>
					{evaluation.details}
				</motion.p>
			</div>
		</motion.div>
	);
};

export default EvaluationDetail;
