import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import { toKebabCase } from '../../helpers/utils';
import { useNavigate } from 'react-router-dom';
import { EvaluationData } from '../../constants';

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
			className='text-left p-2 cursor-pointer'
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			whileHover='hover'
			variants={fadeIn}
		>
			<div className='mb-4'>{service.icon}</div>
			<h3 className='text-[18px] font-semibold mb-2'>{service.title}</h3>
			<p className='text-appgray text-base'>{service.description}</p>
		</motion.div>
	);
};

ServiceCard.propTypes = {
	service: PropTypes.shape({
		icon: PropTypes.element.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	}).isRequired
};

const Evaluation = () => {
	const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section id='evaluation' className=' py-12'>
			<div className='w-full container mx-auto px-4'>
				<motion.div ref={headerRef} initial='hidden' animate={headerInView ? 'visible' : 'hidden'} variants={fadeIn} className='max-w-[690px] text-left'>
					<h2 className='text-[25px] md:text-[40px] font-semibold mb-[0.7em] text-black tracking-[-0.2px]'>
						Değişen pazarlama ve medya anlayışında yanınızdayız! Dijitali satış kanalı olarak değerlendirmek isterseniz burada olacağız.
					</h2>
					<p className='mb-12 text-appgray text-base'>
						LEVELUP, ürün ve hizmetinize özel; satışlarınızı destekleyici dijital stratejiler, mecra ve etkileşim odaklı fikirler, fonksiyonel
						yazılımlar üreten bir dijital pazarlama ajansıdır.
					</p>
				</motion.div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
					{EvaluationData.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Evaluation;
