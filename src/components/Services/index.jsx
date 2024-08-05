import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { services } from '../../constants';

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
			<div className='flex justify-between items-center'>
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

	const toggleDescription = (index) => {
		setExpandedIndex(expandedIndex === index ? null : index);
	};

	return (
		<section id='services' className='py-12'>
			<motion.div className='container mx-auto px-4' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-semibold mb-2'>Hizmetlerimiz</h2>
					<p className='text-primary text-lg'>Neler Yapıyoruz?</p>
				</div>

				<div className='flex justify-between items-center mb-12'>
					<div className='text-center'>
						<h3 className='text-5xl font-bold'>5+</h3>
						<p className='text-lg'>Çözümlerimiz</p>
						<div className='flex justify-center mt-2'>
							{[...Array(5)].map((_, i) => (
								<AiFillStar key={i} className='text-yellow-500' />
							))}
						</div>
					</div>
					<div className='text-center'>
						<h3 className='text-5xl font-bold'>150+</h3>
						<p className='text-lg'>Mutlu Müşteri</p>
					</div>
				</div>
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
