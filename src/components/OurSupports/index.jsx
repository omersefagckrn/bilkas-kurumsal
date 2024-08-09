import { motion } from 'framer-motion';
import { logos } from '../../constants';

const hoverEffect = {
	hover: {
		scale: 1.1,
		transition: {
			duration: 0.3
		}
	}
};

const OurSupports = () => {
	return (
		<section className='py-12'>
			<motion.div className='container mx-auto px-4' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-semibold mb-2'>Bize Güvenenler</h2>
					<p className='text-primary text-lg'>İş birliği yaptığımız değerli markalar</p>
				</div>

				<div className='flex flex-wrap justify-center items-center'>
					{logos.slice(0, 4).map((logo) => (
						<motion.div
							key={logo.id}
							className={`flex justify-center items-center p-4 m-2 w-[200px] h-[100px] rounded-lg shadow-md ${
								logo.isWhite ? 'bg-primary' : 'bg-white'
							}`}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							whileHover='hover'
							variants={hoverEffect}
						>
							<img src={logo.src} alt={logo.alt} className='max-w-full h-auto object-contain' />
						</motion.div>
					))}
				</div>

				<div className='flex flex-wrap justify-center items-center mt-6'>
					{logos.slice(4, 6).map((logo) => (
						<motion.div
							key={logo.id}
							className={`flex justify-center items-center p-4 m-2 w-[200px] h-[100px] rounded-lg shadow-md ${
								logo.isWhite ? 'bg-primary' : 'bg-white'
							}`}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							whileHover='hover'
							variants={hoverEffect}
						>
							<img src={logo.src} alt={logo.alt} className='max-w-full h-auto object-contain' />
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default OurSupports;
