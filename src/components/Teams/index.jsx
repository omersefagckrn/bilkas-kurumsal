import { motion } from 'framer-motion';
import { teams } from '../../constants';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const hoverEffect = {
	hover: {
		scale: 1.05,
		boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
		transition: {
			duration: 0.1
		}
	}
};

const fadeInEffect = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Teams = () => {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true
	});

	return (
		<section id='teams' className='py-12 bg-appbggray'>
			<motion.div className='container w-full px-6 mx-auto lg:px-0' ref={ref} initial='hidden' animate={inView ? 'visible' : 'hidden'} variants={fadeInEffect}>
				<div className='mb-12 text-center'>
					<h2 className='mb-2 text-3xl font-semibold'>{t('team.title')}</h2>
					<p className='text-lg text-primary'>{t('team.subtitle')}</p>
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
							<img src={member.image} alt={member.name} className='object-cover w-24 h-24 mb-4 rounded-full shadow-lg' />
							<p className='font-bold text-black'>{member.name}</p>
							<p className='text-[12px] font-semibold text-appgray'>{member.position}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Teams;
