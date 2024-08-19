import { useEffect } from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { KURUMSAL_ADRES, KURUMSAL_EMAIL, KURUMSAL_NUMARA } from '../../constants';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Logo from '../Logo';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true
	});
	const { t } = useTranslation();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	const fadeInUp = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 }
	};

	return (
		<>
			<footer id='contact' className='py-12 text-black bg-appbggray'>
				<div className='container w-full px-6 mx-auto lg:px-0'>
					<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
						<motion.div
							ref={ref}
							className='flex flex-col items-start justify-between'
							initial='hidden'
							animate={controls}
							variants={fadeInUp}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<div className='text-[14px] space-y-2'>
								<div className='font-bold text-lg mb-2 border-b border-b-primary pb-2 text-[17px] text-primary'>
									{t('footer.about')}
								</div>
								<div className='text-left'>{t('footer.aboutDescription')}</div>
							</div>
							<div className='hidden pt-10 lg:mt-0 lg:block'>
								<Logo />
							</div>
						</motion.div>

						<motion.div
							ref={ref}
							className='text-[14px]'
							initial='hidden'
							animate={controls}
							variants={fadeInUp}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<div className='font-bold text-lg mb-2 border-b border-b-primary pb-2 text-[17px] text-primary'>{t('footer.contact')}</div>
							<div className='flex items-center mb-3'>
								<FiMapPin size={18} className='mr-2' />
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

						<motion.div ref={ref} initial='hidden' animate={controls} variants={fadeInUp} transition={{ duration: 0.5, delay: 0.3 }}>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.359728316154!2d29.199280099999996!3d40.907857799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5b2503f514f%3A0x201d85bc7e3203fb!2sDumankaya%20Vizyon!5e0!3m2!1sen!2str!4v1724105058750!5m2!1sen!2str'
								width='100%'
								height='300'
								loading='lazy'
							></iframe>
						</motion.div>
					</div>
					<div className='mt-8 text-sm text-center lg:mt-0 text-black/50'>
						<div>
							&copy; 2023 Bilkas Dijital Reklam Ajansı. {t('footer.rightsReserved')}{' '}
							<a href={`tel:05078455183`} alt='Ömer Sefa Güçkıran' className='font-bold underline'>
								{t('footer.developer')}
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
