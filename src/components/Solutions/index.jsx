import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { categories, works } from '../../constants';

const bounceVariant = {
	hidden: { opacity: 0, y: 50, scale: 0.8 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
	}),
	exit: { opacity: 0, y: 50, scale: 0.8, transition: { duration: 0.5, ease: 'easeIn' } },
	hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const WorkCard = ({ work, index }) => {
	return (
		<motion.div
			className='bg-white p-5 rounded-xl flex flex-col justify-between shadow-md'
			variants={bounceVariant}
			initial='hidden'
			animate='visible'
			exit='exit'
			whileHover='hover'
			custom={index}
		>
			<img src={work.image} alt={work.title} className='rounded-md mb-2 object-cover w-[500px] h-[200px]' />
			<div className='flex flex-col items-start justify-start pt-[20px] pr-[40px] pb-[40px]'>
				<h3 className='text-lg font-semibold mb-2 text-[#333]'>{work.title}</h3>
				<p className='text-[#333] text-sm font-normal mb-2.5'>{work.description}</p>
				<div
					onClick={() => {
						console.log('Devamını oku tıklandı');
					}}
					className='flex items-start cursor-pointer'
				>
					<div className='bg-primary text-white px-4 py-2 rounded-md text-sm font-medium space-x-2 text-center'>Devamını Oku</div>
				</div>
			</div>
		</motion.div>
	);
};

WorkCard.propTypes = {
	work: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	}).isRequired,
	index: PropTypes.number.isRequired
};

const Solutions = () => {
	const [selectedCategory, setSelectedCategory] = useState('Tümü');
	const filteredWorks = selectedCategory === 'Tümü' ? works : works.filter((work) => work.category === selectedCategory);

	return (
		<section id='solutions' className='py-12 bg-[#F2F5F9]'>
			<motion.div className='container mx-auto px-4' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-semibold mb-2'>Blog</h2>
					<p className='text-primary text-lg'>Araştırın ve Öğrenin!</p>
				</div>

				<div className='flex justify-start items-center space-x-4 lg:justify-center mb-8 overflow-x-auto pb-4'>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`py-2  px-4 rounded-lg whitespace-nowrap ${
								selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-appgray'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<AnimatePresence>
						{filteredWorks.map((work, index) => (
							<WorkCard key={work.id} work={work} index={index} />
						))}
					</AnimatePresence>
				</div>
			</motion.div>
		</section>
	);
};

export default Solutions;
