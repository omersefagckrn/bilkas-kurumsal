import { motion } from 'framer-motion';
import BannerImg from '../../assets/slide.png';
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
			<section className='flex flex-col items-center justify-between py-40 bg-white md:flex-row'>
				<motion.div {...fadeInLeft} className='flex-1 mb-8 md:mb-0'>
					<h2 className='mb-2 text-xl font-semibold text-primary md:text-2xl'>Dijital Pazarlama&rsquo;nın Gücü ile</h2>
					<h1 className='mb-4 text-4xl font-bold leading-tight text-black md:text-6xl'>
						Potansiyel müşterilerinize <span className='text-primary'>ulaşın!</span>
					</h1>
					<p className='mb-6 text-gray-700'>
						Veri ve dönüşüme dayalı etkili dijital pazarlama taktikleri ile hedef kitlenize ulaşın ve firmanızın dijital dünyada varlığını büyütün.
					</p>
					<a href={`tel:${KURUMSAL_NUMARA}`} className='px-6 py-3 text-white transition duration-300 rounded-full shadow-lg bg-primary hover:bg-primary-dark'>
						Bize Ulaşın →
					</a>
				</motion.div>
				<motion.div {...fadeInRight} className='flex-1'>
					<img src={BannerImg} alt='Dijital Pazarlama' className='w-full h-auto' />
				</motion.div>
			</section>
		</div>
	);
};

export default Banner;
