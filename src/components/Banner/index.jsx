import { motion } from 'framer-motion';
import BannerImg from '../../assets/slide.jpg';
import { KURUMSAL_NUMARA } from '../../constants';

const Banner = () => {
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
		<div id='banner' className='container w-full mx-auto'>
			<section className='flex flex-col items-center justify-between py-20 bg-white lg:py-24 md:flex-row'>
				<motion.div {...fadeInLeft} className='w-full mb-8 md:mb-0'>
					<h2 className='mb-2 text-xl font-semibold text-primary md:text-2xl'>İş Dünyasında Zirveye</h2>
					<h1 className='mb-4 text-4xl font-bold leading-tight text-black md:text-6xl'>
						İşinizi <span className='text-primary'>kurun</span> veya <span className='text-primary'>geliştirin</span>
					</h1>
					<p className='mb-6 text-gray-700'>
						<span className='font-bold'>Tek bir çatı altında</span> sunduğumuz profesyonel çözümlerle işinizi kurarken ve geliştirirken her adımda
						yanınızdayız. Mali danışmanlıktan özel yazılım çözümlerine, sosyal medya yönetiminden tasarım ve dijital pazarlamaya kadar dijital dünya da
						tüm süreçleri uzman kadromuzla <span className='font-bold'>sizin için yönetiyoruz.</span>
					</p>
					<a href={`tel:${KURUMSAL_NUMARA}`} className='px-6 py-3 text-white transition duration-300 rounded-full shadow-lg bg-primary hover:bg-primary-dark'>
						Bize Ulaş →
					</a>
				</motion.div>
				<motion.div {...fadeInRight} className='flex items-center justify-center'>
					<img src={BannerImg} alt='İşinizi Kurun ve Yükseltin' className='w-[70%] h-auto' />
				</motion.div>
			</section>
		</div>
	);
};

export default Banner;
