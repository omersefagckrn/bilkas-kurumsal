import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { toKebabCase } from '../../helpers/utils';
import { useNavigate } from 'react-router-dom';
import { useEvaluationData } from '../../hooks/useEvaluationData';

const fadeIn = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hover: { scale: 1.05, transition: { duration: 0.2 } }
};

const ServiceCard = ({ service }) => {
	const navigate = useNavigate();
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	const handleCardClick = () => {
		navigate(`/evaluation/${toKebabCase(service.title)}`);
	};

	return (
		<motion.div
			onClick={handleCardClick}
			ref={ref}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			whileHover='hover'
			variants={fadeIn}
			className='p-4 text-left transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg'
		>
			<div className='mb-4 text-primary'>{service.icon}</div>
			<h3 className='mb-2 text-lg font-semibold'>{service.title}</h3>
			<p className='text-sm text-appgray'>{service.description}</p>
		</motion.div>
	);
};

const Evaluation = () => {
	const { t } = useTranslation();
	const EvaluationData = useEvaluationData();
	const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section id='evaluation' className='py-12 bg-appbggray'>
			<div className='container mx-auto'>
				<motion.div ref={headerRef} initial='hidden' animate={headerInView ? 'visible' : 'hidden'} variants={fadeIn} className='mx-auto mb-12 text-left'>
					<h2 className='mb-0 text-2xl font-semibold tracking-tight lg:mb-4 text-primary md:text-4xl'>{t('evaluation.heading_1')}</h2>
					<h2 className='mb-4 text-2xl font-semibold tracking-tight text-black md:text-4xl'>{t('evaluation.heading_2')}</h2>
					<p className='text-base text-appgray'>{t('evaluation.paragraph')}</p>
				</motion.div>
				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{EvaluationData.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Evaluation;
