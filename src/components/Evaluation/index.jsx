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
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
	const navigate = useNavigate();

	const handleCardClick = () => {
		navigate(`/evaluation/${toKebabCase(service.title)}`);
	};

	return (
		<motion.div
			onClick={handleCardClick}
			ref={ref}
			className='p-2 text-left cursor-pointer'
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			whileHover='hover'
			variants={fadeIn}
		>
			<div className='mb-4'>{service.icon}</div>
			<h3 className='text-[18px] font-semibold mb-2'>{service.title}</h3>
			<p className='text-base text-appgray'>{service.description}</p>
		</motion.div>
	);
};

const Evaluation = () => {
	const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });
	const { t } = useTranslation();
	const EvaluationData = useEvaluationData();

	return (
		<section id='evaluation' className='py-12 bg-appbggray'>
			<div className='container w-full px-6 mx-auto lg:px-0'>
				<motion.div ref={headerRef} initial='hidden' animate={headerInView ? 'visible' : 'hidden'} variants={fadeIn} className='max-w-[690px] text-left'>
					<h2 className='text-[25px] md:text-[40px] font-semibold text-black tracking-[-0.2px]'>{t('evaluation.heading_1')}</h2>
					<h2 className='text-[25px] md:text-[40px] font-semibold mb-[0.7em] text-black tracking-[-0.2px]'>{t('evaluation.heading_2')}</h2>

					<p className='mb-12 text-base text-appgray'>{t('evaluation.paragraph')}</p>
				</motion.div>
				<div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
					{EvaluationData.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Evaluation;
