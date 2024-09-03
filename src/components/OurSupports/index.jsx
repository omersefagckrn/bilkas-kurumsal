import { motion } from 'framer-motion';
import { KURUMSAL_LOGO } from '../../constants';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const hoverEffect = {
	hover: {
		scale: 1.1,
		transition: { duration: 0.3 }
	}
};

const fadeInEffect = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const logoAnimation = {
	initial: { opacity: 0, scale: 0.9 },
	animate: { opacity: 1, scale: 1 }
};

const OurSupports = () => {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	return (
		<motion.div ref={ref} className='container w-full py-12 mx-auto' initial='hidden' animate={inView ? 'visible' : 'hidden'} variants={fadeInEffect}>
			<div className='mb-12 text-center'>
				<h2 className='mb-2 text-3xl font-semibold'>{t('trusted.title')}</h2>
				<p className='text-lg text-primary'>{t('trusted.subtitle')}</p>
			</div>

			<div className='flex flex-wrap items-center justify-center'>
				{KURUMSAL_LOGO.slice(0, 4).map((logo) => (
					<motion.div
						key={logo.src}
						className={`flex justify-center items-center p-4 m-2 w-[200px] h-[100px] rounded-lg shadow-md ${logo.isWhite ? 'bg-primary' : 'bg-white'}`}
						initial={logoAnimation.initial}
						animate={logoAnimation.animate}
						whileHover='hover'
						variants={hoverEffect}
					>
						<img src={logo.src} alt={`Logo of ${logo.alt}`} className='object-contain h-auto max-w-full' />
					</motion.div>
				))}
			</div>

			<div className='flex flex-wrap items-center justify-center mt-6'>
				{KURUMSAL_LOGO.slice(4, 6).map((logo) => (
					<motion.div
						key={logo.src}
						className={`flex justify-center items-center p-4 m-2 w-[200px] h-[100px] rounded-lg shadow-md ${logo.isWhite ? 'bg-primary' : 'bg-white'}`}
						initial={logoAnimation.initial}
						animate={logoAnimation.animate}
						whileHover='hover'
						variants={hoverEffect}
					>
						<img src={logo.src} alt={`Logo of ${logo.alt}`} className='object-contain h-auto max-w-full' />
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};

export default OurSupports;
