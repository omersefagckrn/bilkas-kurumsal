import { useEffect } from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { KURUMSAL_ADRES, KURUMSAL_EMAIL, KURUMSAL_NUMARA } from '../../constants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Logo from '../Logo';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true
	});
	const { t } = useTranslation();

	const fadeInUp = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
	};

	return (
		<footer id='contact' className='py-12 bg-appbggray'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 gap-6 text-black md:grid-cols-3'>
					<motion.div
						ref={ref}
						className='flex flex-col items-start justify-between'
						initial='hidden'
						animate={inView ? 'visible' : 'hidden'}
						variants={fadeInUp}
					>
						<div className='space-y-2 text-[14px]'>
							<div className='pb-2 mb-2 text-lg font-bold border-b text-primary'>{t('footer.about')}</div>
							<div className='text-left'>{t('footer.aboutDescription')}</div>
						</div>
						<div className='hidden pt-10 lg:flex'>
							<Logo />
						</div>
					</motion.div>

					<motion.div ref={ref} className='text-[14px]' initial='hidden' animate={inView ? 'visible' : 'hidden'} variants={fadeInUp}>
						<div className='pb-2 mb-2 text-lg font-bold border-b text-primary'>{t('footer.contact')}</div>
						<div className='flex items-center mb-3'>
							<FiMapPin size={22} className='mr-2' />
							<div>{KURUMSAL_ADRES}</div>
						</div>
						<a href={`tel:${KURUMSAL_NUMARA}`} className='flex items-center mb-3'>
							<FiPhoneCall size={18} className='mr-2' />
							<div>{KURUMSAL_NUMARA}</div>
						</a>
						<a href={`mailto:${KURUMSAL_EMAIL}`} className='flex items-center mb-3'>
							<FiMail size={18} className='mr-2' />
							<div>{KURUMSAL_EMAIL}</div>
						</a>
					</motion.div>

					<motion.div ref={ref} initial='hidden' animate={inView ? 'visible' : 'hidden'} variants={fadeInUp}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.464488250822!2d29.1968173!3d40.9055604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5ac086d81a5%3A0x930c1dd20c470a2b!2sBilkas%20Dijital%20Reklam%20Ajans%C4%B1!5e0!3m2!1sen!2str!4v1725441337381!5m2!1sen!2str'
							width='100%'
							height='350'
							loading='lazy'
							title='Kurum Adres'
						></iframe>
					</motion.div>
				</div>
				<div className='mt-8 text-sm text-center text-black/50'>
					&copy; 2023 Bilkas Dijital Reklam Ajansı. {t('footer.rightsReserved')}{' '}
					<a href={`tel:05078455183`} className='font-bold underline'>
						{t('footer.developer')}
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
