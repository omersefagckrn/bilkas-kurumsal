import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BannerImg from '../../assets/slide.png';
import { KURUMSAL_NUMARA } from '../../constants';

const Banner = () => {
	const { t } = useTranslation();

	return (
		<div id='banner' className='container w-full py-12 mx-auto'>
			<section className='flex flex-col items-center justify-between gap-20 md:flex-row'>
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }} className='w-full'>
					<h2 className='mb-2 text-xl font-semibold text-primary md:text-2xl'>{t('banner.subtitle')}</h2>
					<h1 className='mb-4 text-4xl font-bold leading-tight text-black md:text-5xl'>
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
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					className='w-[75%] lg:w-[45%]'
				>
					<img src={BannerImg} alt={t('banner.image_alt')} className='w-full h-auto' />
				</motion.div>
			</section>
		</div>
	);
};

export default Banner;
