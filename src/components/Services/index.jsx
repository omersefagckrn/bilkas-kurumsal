import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useServices } from '../../hooks/useServices';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ service, index, expandedIndex, toggleDescription }) => {
	return (
		<motion.div
			onClick={() => toggleDescription(index)}
			key={index}
			className={`bg-white p-6 rounded-lg shadow-md flex flex-col justify-between cursor-pointer transition-all duration-500 ${expandedIndex === index ? 'mb-4' : ''}`}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			whileHover={{ scale: 1.05 }}
			transition={{ duration: 0.5 }}
		>
			<div className='flex items-center justify-between'>
				<h3 className='text-2xl font-semibold'>{service.title}</h3>
				<button className='text-primary'>{expandedIndex === index ? <FiMinus size={24} /> : <FiPlus size={24} />}</button>
			</div>
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={{ height: expandedIndex === index ? 'auto' : 0, opacity: expandedIndex === index ? 1 : 0 }}
				transition={{ duration: 0.5 }}
				className={`overflow-hidden ${expandedIndex === index ? 'mb-4' : ''}`}
			>
				<p className='mt-4 text-appgray'>{service.description}</p>
			</motion.div>
		</motion.div>
	);
};

ServiceCard.propTypes = {
	service: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	}).isRequired,
	index: PropTypes.number.isRequired,
	expandedIndex: PropTypes.number,
	toggleDescription: PropTypes.func.isRequired
};

const Services = () => {
	const [expandedIndex, setExpandedIndex] = useState(null);
	const { t } = useTranslation();
	const services = useServices();

	const toggleDescription = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	const { ref: sectionRef, inView: sectionInView } = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const { ref: statsRef, inView: statsInView } = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	return (
		<section id='services' className='py-12'>
			<motion.div
				ref={sectionRef}
				className='container w-full mx-auto'
				initial={{ opacity: 0, y: 50 }}
				animate={sectionInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5 }}
			>
				<div className='mb-12 text-center'>
					<h2 className='mb-2 text-3xl font-semibold'>{t('servicesSection.title')}</h2>
					<p className='text-lg text-primary'>{t('servicesSection.subtitle')}</p>
				</div>

				<motion.div
					ref={statsRef}
					initial={{ opacity: 0, y: 50 }}
					animate={statsInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className='flex items-center justify-between mb-12'
				>
					<div className='text-center'>
						<h3 className='text-5xl font-bold'>5+</h3>
						<p className='text-lg'>{t('servicesSection.solutions')}</p>
						<div className='flex justify-center mt-2'>
							{[...Array(5)].map((_, i) => (
								<AiFillStar key={i} className='text-yellow-500' />
							))}
						</div>
					</div>
					<div className='text-center'>
						<h3 className='text-5xl font-bold'>12+</h3>
						<p className='text-lg'>{t('servicesSection.happyClients')}</p>
					</div>
				</motion.div>

				<div className='grid gap-8'>
					{services.map((service, index) => (
						<ServiceCard key={index} service={service} index={index} expandedIndex={expandedIndex} toggleDescription={toggleDescription} />
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Services;
