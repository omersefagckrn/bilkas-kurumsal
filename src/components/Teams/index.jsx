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
			<motion.div className='container mx-auto px-4' initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-semibold mb-2'>Ekibimiz</h2>
					<p className='text-primary text-lg'>Sizlere hizmet veren profesyoneller</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{teams.map((member) => (
						<motion.div
							key={member.id}
							className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-all duration-500'
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							whileHover='hover'
							variants={hoverEffect}
						>
							<img src={member.image} alt={member.name} className='w-24 h-24 rounded-full mb-4 shadow-lg' />
							<h3 className='text-xl font-semibold mb-2'>{member.name}</h3>
							<p className='text-gray-600'>{member.position}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Teams;
