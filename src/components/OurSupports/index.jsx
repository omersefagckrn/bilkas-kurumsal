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
			<motion.div className='container px-4 mx-auto' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
				<div className='mb-12 text-center'>
					<h2 className='mb-2 text-3xl font-semibold'>Bize Güvenenler</h2>
					<p className='text-lg text-primary'>İş birliği yaptığımız değerli markalar</p>
				</div>

				<div className='flex flex-wrap items-center justify-center'>
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
							<img src={logo.src} alt={logo.alt} className='object-contain h-auto max-w-full' />
						</motion.div>
					))}
				</div>

				<div className='flex flex-wrap items-center justify-center mt-6'>
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
							<img src={logo.src} alt={logo.alt} className='object-contain h-auto max-w-full' />
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default OurSupports;
