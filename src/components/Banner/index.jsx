import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BannerImg from '../../assets/slide.png';
import { KURUMSAL_NUMARA } from '../../constants';

const Banner = () => {
	const { t } = useTranslation();

	const fadeInLeft = {
		initial: { opacity: 0, x: -50 },
		animate: { opacity: 1, x: 0 },
		transition: { duration: 0.5 }
	};

	const fadeInRight = {
		initial: { opacity: 0, x: 50 },
		animate: { opacity: 1, x: 0 },
		transition: { duration: 0.5 }
	};

	return (
		<div id='banner' className='container w-full px-6 mx-auto lg:px-0'>
			<section className='flex flex-col items-center justify-between gap-20 py-20 bg-white lg:py-24 md:flex-row'>
				<motion.div {...fadeInLeft} className='w-full mb-8 md:mb-0'>
					<h2 className='mb-2 text-xl font-semibold text-primary md:text-2xl'>{t('banner.subtitle')}</h2>
					<h1 className='mb-4 text-4xl font-bold leading-tight text-black md:text-6xl'>
						{t('banner.title_1')} <span className='text-primary'>{t('banner.highlight_1')}</span> {t('banner.or')}{' '}
						<span className='text-primary'>{t('banner.highlight_2')}</span>
					</h1>
					<p className='mb-6 text-gray-700'>
						<span className='font-bold'>{t('banner.line_1')}</span> {t('banner.line_2')}
						<span className='ml-1 font-bold'>{t('banner.line_3')}</span>
					</p>
					<a href={`tel:${KURUMSAL_NUMARA}`} className='px-6 py-3 text-white transition duration-300 rounded-full shadow-lg bg-primary'>
						{t('banner.button_text')} →
					</a>
				</motion.div>
				<motion.div {...fadeInRight} className='flex items-center justify-center w-[75%] lg:w-[45%]'>
					<img src={BannerImg} alt={t('banner.image_alt')} className='h-auto' />
				</motion.div>
			</section>
		</div>
	);
};

export default Banner;
