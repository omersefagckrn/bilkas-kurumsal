import { useEffect } from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';
import { KURUMSAL_ADRES, KURUMSAL_EMAIL, KURUMSAL_NUMARA } from '../../constants';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Logo from '../Logo';

const Footer = () => {
	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true
	});

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
			<footer id='contact' className='text-black bg-[#F2F5F9] py-12'>
				<div className='container mx-auto w-full'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0'>
						<motion.div
							ref={ref}
							className='flex items-start justify-between flex-col'
							initial='hidden'
							animate={controls}
							variants={fadeInUp}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<div className='text-[14px] space-y-2'>
								<div className='font-bold text-lg mb-2 border-b border-b-primary pb-2 text-[17px] text-primary'>Hakkımızda</div>
								<div className='text-justify'>
									Bilkas Dijital Reklam Ajansı olarak, dijital pazarlama dünyasında yaratıcı çözümlerle markanızı zirveye
									taşımayı hedefliyoruz. Yenilikçi yaklaşımımız ve deneyimli ekibimizle, müşterilerimizin beklentilerini aşan
									projeler geliştiriyoruz. Sunduğumuz hizmetler arasında sosyal medya yönetimi, içerik üretimi, arama motoru
									optimizasyonu (SEO), dijital reklam kampanyaları ve web tasarımı bulunmaktadır. Her adımda, markanızın dijital
									dünyadaki varlığını güçlendirmek ve hedef kitlenizle etkili bir iletişim kurmanızı sağlamak için çalışıyoruz.
								</div>
							</div>
							<div className='pt-10 lg:mt-0 hidden lg:block'>
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
							<div className='font-bold text-lg mb-2 border-b border-b-primary pb-2 text-[17px] text-primary'>İletişim</div>
							<div className='flex items-center mb-2'>
								<FiMapPin className='mr-2' />
								<div>{KURUMSAL_ADRES}</div>
							</div>
							<a href={`tel:${KURUMSAL_NUMARA}`} className='flex items-center mb-2'>
								<FiPhoneCall className='mr-2' />
								<div>{KURUMSAL_NUMARA}</div>
							</a>
							<a href={`mailto:${KURUMSAL_EMAIL}`} className='flex items-center mb-2'>
								<FiMail className='mr-2' />
								<div>{KURUMSAL_EMAIL}</div>
							</a>
						</motion.div>

						<motion.div ref={ref} initial='hidden' animate={controls} variants={fadeInUp} transition={{ duration: 0.5, delay: 0.3 }}>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.8601996129305!2d29.234819851638967!3d40.883868222051824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadcababbfec0d%3A0xb89f33b625ea5766!2sBah%C3%A7elievler%2C%20Adnan%20Menderes%20Blv.%20No%3A23%20D%3Aa%2C%2034893%20Pendik%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1720089632729!5m2!1sen!2str'
								width='100%'
								height='300'
								loading='lazy'
							></iframe>
						</motion.div>
					</div>
					<div className='text-center mt-8 lg:mt-0 text-black/50 text-sm'>
						<div>
							&copy; 2024 Bilkas Dijital Reklam Ajansı. Tüm hakları saklıdır.{' '}
							<a href={`tel:05078455183`} alt='Ömer Sefa Güçkıran' className='font-bold underline'>
								Geliştirici
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
