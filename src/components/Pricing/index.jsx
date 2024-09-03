import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { plans } from '../../constants';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const cardVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const PricingCard = ({ plan }) => {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
	const navigate = useNavigate();

	return (
		<motion.div
			ref={ref}
			className={`relative bg-white p-6 rounded-lg shadow-md border ${plan.recommended ? 'border-primary border-4 transform scale-105' : 'border-gray-200'}`}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			whileHover='hover'
			variants={cardVariants}
		>
			{plan.recommended && <div className='absolute top-0 left-0 w-full py-2 text-lg font-semibold text-center text-white rounded-sm bg-primary'>Önerilen</div>}
			<div className='mt-8 text-center'>
				<h2 className='mb-4 text-2xl font-bold'>{plan.name}</h2>
				<p className='text-xl font-semibold'>{plan.price} TL</p>
				<p className='mt-2 mb-6 text-gray-600'>{plan.description}</p>
				<button
					onClick={() => navigate('/checkout', { state: { plan } })}
					className='w-full px-4 py-2 text-gray-700 transition bg-gray-200 rounded hover:bg-primary hover:text-white'
				>
					{plan.buttonText}
				</button>
			</div>
			<ul className='mt-6 space-y-4'>
				{Object.entries(plan.features).map(([category, items], i) => (
					<li key={i} className='text-gray-800'>
						<strong>{category}:</strong>
						<ul className='mt-2 ml-4 space-y-1'>
							{items.map((item, j) => (
								<li key={j} className='text-gray-700'>
									<span className='mr-2'>✔️</span> {item}
								</li>
							))}
						</ul>
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
		description: PropTypes.string.isRequired,
		buttonText: PropTypes.string.isRequired,
		features: PropTypes.object.isRequired
	}).isRequired
};

const Pricing = () => {
	const { t } = useTranslation();
	return (
		<div id='pricing' className='container w-full py-12 mx-auto'>
			<div className='mb-12 text-center'>
				<h2 className='mb-2 text-3xl font-semibold'>{t('pricingSection.title')}</h2>
				<p className='text-lg text-primary'>{t('pricingSection.subtitle')}</p>
			</div>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4'>
				{plans.map((plan) => (
					<PricingCard key={plan.name} plan={plan} />
				))}
			</div>
		</div>
	);
};

export default Pricing;
