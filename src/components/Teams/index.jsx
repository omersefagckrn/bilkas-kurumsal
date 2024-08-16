import { motion } from 'framer-motion';
import { teams } from '../../constants';

const hoverEffect = {
	hover: {
		scale: 1.05,
		boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
		transition: {
			duration: 0.1
		}
	}
};

const Teams = () => {
	return (
		<section id='teams' className='py-12'>
			<motion.div className='container px-4 mx-auto' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
				<div className='mb-12 text-center'>
					<h2 className='mb-2 text-3xl font-semibold'>Ekibimiz</h2>
					<p className='text-lg text-primary'>Sizlere hizmet veren profesyoneller</p>
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
					{teams.map((member) => (
						<motion.div
							key={member.id}
							className='flex flex-col items-center p-6 transition-all duration-500 bg-white rounded-lg shadow-md'
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							whileHover='hover'
							variants={hoverEffect}
						>
							<img src={member.image} alt={member.name} className='w-24 h-24 mb-4 rounded-full shadow-lg' />
							<h3 className='mb-2 text-xl font-semibold'>{member.name}</h3>
							<p className='text-gray-600'>{member.position}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Teams;
