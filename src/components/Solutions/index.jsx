import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, works } from '../../constants';

const Solutions = () => {
	const [selectedCategory, setSelectedCategory] = useState('Tümü');

	const filteredWorks = selectedCategory === 'Tümü' ? works : works.filter((work) => work.category === selectedCategory);

	const fadeVariant = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
		exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5, ease: 'easeIn' } },
		hover: { scale: 1.05, transition: { duration: 0.3 } }
	};

	return (
		<section id='solutions' className='py-12 bg-gray-50'>
			<motion.div className='container mx-auto px-4' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-semibold mb-2'>Çalışmalarımız</h2>
					<p className='text-primary text-lg'>Beklentinizi Yeniden Yükseltin!</p>
				</div>

				<div className='flex justify-center space-x-4 mb-8 overflow-hidden overflow-x-auto whitespace-nowrap'>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`py-2 px-4 rounded-lg ${selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
						>
							{category}
						</button>
					))}
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<AnimatePresence>
						{filteredWorks.map((work) => (
							<motion.div
								key={work.id}
								className='bg-white p-4 rounded-xl flex flex-col justify-between cursor-pointer shadow-md'
								variants={fadeVariant}
								initial='hidden'
								animate='visible'
								exit='exit'
								whileHover='hover'
								transition={{ duration: 0.5 }}
							>
								<img src={work.image} alt={work.title} className='rounded-lg mb-2 object-contain' />
								<h3 className='text-lg font-semibold mb-2'>{work.title}</h3>
								<p className='text-gray-600 text-sm'>{work.description}</p>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</motion.div>
		</section>
	);
};

export default Solutions;
