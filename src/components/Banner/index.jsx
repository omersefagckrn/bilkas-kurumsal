import { motion } from 'framer-motion';
import BannerImg from '../assets/slide.png';

const Banner = () => {
	return (
		<div id='banner' className='container mx-auto w-full'>
			<section className='flex flex-col md:flex-row items-center justify-between pt-24 pb-16 bg-white'>
				<motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='flex-1 mb-8 md:mb-0'>
					<h2 className='text-primary font-semibold text-xl md:text-2xl mb-2'>Dijital Pazarlama&rsquo;nın Gücü ile</h2>
					<h1 className='text-4xl md:text-6xl font-bold text-black leading-tight mb-4'>
						Potansiyel müşterilerinize <span className='text-primary'>ulaşın!</span>
					</h1>
					<p className='text-gray-700 mb-6'>
						Veri ve dönüşüme dayalı etkili dijital pazarlama taktikleri ile hedef kitlenize ulaşın ve firmanızın dijital dünyada varlığını büyütün.
					</p>
					<a href='#more-info' className='inline-block bg-primary text-white py-3 px-6 rounded-full shadow-lg hover:bg-primary-dark transition duration-300'>
						Bize Ulaşın →
					</a>
				</motion.div>
				<motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className='flex-1'>
					<img src={BannerImg} alt='Dijital Pazarlama' className='w-full h-auto' />
				</motion.div>
			</section>
		</div>
	);
};

export default Banner;
