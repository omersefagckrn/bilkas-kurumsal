import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { plans } from '../../constants';

const fadeIn = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const PricingCard = ({ plan }) => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<motion.div
			ref={ref}
			className={`relative bg-white p-6 rounded-lg shadow-md border ${plan.recommended ? 'border-primary border-4 transform scale-105' : 'border-gray-200'}`}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			whileHover='hover'
			variants={fadeIn}
		>
			{plan.recommended && <div className='absolute top-0 left-0 w-full text-center bg-primary text-white rounded-sm py-2 text-lg font-semibold'>Önerilen</div>}
			<div className='text-center mt-8'>
				<h2 className='text-2xl font-bold mb-4'>{plan.name}</h2>
				<p className='text-xl font-semibold'>
					{plan.price} <span className='text-sm font-normal'>{plan.period}</span>
				</p>
				<p className='mt-2 mb-6 text-gray-600'>{plan.description}</p>
				<button className={`w-full py-2 px-4 rounded ${plan.recommended ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>{plan.buttonText}</button>
			</div>
			<ul className='mt-6 space-y-2'>
				{plan.features.map((feature, i) => (
					<li key={i} className='flex items-center text-gray-700'>
						<span className='mr-2'>✔️</span> {feature}
					</li>
				))}
			</ul>
		</motion.div>
	);
};

PricingCard.propTypes = {
	plan: PropTypes.shape({
		recommended: PropTypes.bool,
		name: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		period: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		buttonText: PropTypes.string.isRequired,
		features: PropTypes.arrayOf(PropTypes.string).isRequired
	}).isRequired
};

const Pricing = () => {
	return (
		<section id='pricing' className='py-12'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-semibold mb-2'>Ücretlendirme</h2>
					<p className='text-primary text-lg'>Neler Sunuyoruz?</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{plans.map((plan) => (
						<PricingCard key={plan.name} plan={plan} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
