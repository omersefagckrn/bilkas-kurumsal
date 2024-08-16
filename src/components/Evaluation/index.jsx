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
		<section id='evaluation' className='py-12 bg-appbggray'>
			<div className='container w-full px-4 mx-auto'>
				<motion.div ref={headerRef} initial='hidden' animate={headerInView ? 'visible' : 'hidden'} variants={fadeIn} className='max-w-[690px] text-left'>
					<h2 className='text-[25px] md:text-[40px] font-semibold text-black tracking-[-0.2px]'>İşinizi kurun veya geliştirin.</h2>
					<h2 className='text-[25px] md:text-[40px] font-semibold mb-[0.7em] text-black tracking-[-0.2px]'>Biz sizin her zaman yanınızdayız.</h2>

					<p className='mb-12 text-base text-appgray'>
						İşinizi kurma ve büyütme sürecinde, ihtiyaç duyduğunuz her alanda yanınızdayız. Mali danışmanlık, özel yazılım çözümleri, sosyal medya
						yönetimi, tasarım ve dijital reklamcılıktan oluşan geniş hizmet yelpazemizle, uzman ekibimiz tüm bu süreçleri sizin için yönetiyor.
					</p>
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
