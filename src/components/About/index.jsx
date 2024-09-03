import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Banner from '../../assets/banner.svg';

const About = () => {
	const { t } = useTranslation();

	const fadeIn = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
	};

	return (
		<div className='container py-12 mx-auto'>
			<motion.div className='flex justify-center' initial='hidden' animate='visible' variants={fadeIn} transition={{ delay: 0.5 }}>
				<img src={Banner} alt={t('about.title')} className='mb-6 rounded-lg shadow-lg' />
			</motion.div>

			<motion.div initial='hidden' animate='visible' variants={fadeIn}>
				<h1 className='mb-4 text-4xl font-bold'>{t('about.title')}</h1>
				<p className='text-lg text-gray-700'>{t('about.description')}</p>
			</motion.div>

			<motion.div className='mt-8' initial='hidden' animate='visible' variants={fadeIn} transition={{ delay: 1 }}>
				<h2 className='mb-4 text-2xl font-semibold'>{t('about.missionTitle')}</h2>
				<p className='text-lg text-gray-700'>{t('about.missionDescription')}</p>
			</motion.div>
		</div>
	);
};

export default About;
