import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types'; // prop-types'ı ekleyin
import { FiCamera, FiPenTool, FiShare2 } from 'react-icons/fi';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { LuCode2 } from 'react-icons/lu';
import { MdCampaign } from 'react-icons/md';

const EvaluationData = [
	{
		title: 'SEO',
		description: 'SEO hizmeti ile hedef kitlenizin Google üzerinde yaptığı ürün ya da hizmet araştırmalarında, organik olarak rakiplerinizin önünde ya da üst sıralarda yer alırsınız. LEVELUP bu hizmeti verirken, web sitenizi geliştirir ve sitenize daha fazla trafik çekmek için çözüm önerilerinde bulunur.',
		icon: <GiMagnifyingGlass size={30} className='text-primary' />
	},
	{
		title: 'Dijital Pazarlama',
		description: 'Markanızın dijital mecralarda stratejik şekilde tanıtımının yapılmasını, ürün ya da hizmetlerinizin satın almaya yönlendirilmesini ve ihtiyaç anında ilk akla gelmesini hedefleyen pazarlama yöntemidir.',
		icon: <MdCampaign size={30} className='text-primary' />
	},
	{
		title: 'Kreatif Tasarım',
		description: 'Estetik bir yaklaşım ile hedef kitlenin dikkatini çekerken, işlevselliği ile markanın mesajını vurgulayan ve etkileşimi yüksek tasarımlar oluşturmayı amaçlayan sanatsal bir süreçtir.',
		icon: <FiPenTool size={30} className='text-primary' />
	},
	{
		title: 'Yazılım Çözümleri',
		description: 'Web sitelerinin kullanıcı dostu görünümünün, etkin fonksiyonelliğinin ve ölçümlemeyi mümkün kılan tasarımının oluşturulma sürecidir.',
		icon: <LuCode2 size={30} className='text-primary' />
	},
	{
		title: 'Sosyal Medya Yönetimi',
		description: 'İşletmelerin sosyal medya hesaplarının etkili şekilde yürütülmesi, etkinlik ve aktivitelerinin etkileşim bazlı planlaması ve gelişim odaklı optimize etmek üzere izlenmesi yaklaşımıyla yönetilmesidir.',
		icon: <FiShare2 size={30} className='text-primary' />
	},
	{
		title: 'Fotoğraf & Video Çekimi',
		description: 'Şirketlerin ürün ya da hizmetlerinin talep alacak şekilde tanıtılması ve istenilen mecralarda kullanılmak üzere optimize edilmesi üzerine gelişen bir hizmet sürecidir.',
		icon: <FiCamera size={30} className='text-primary' />
	}
];

const fadeIn = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	hover: { scale: 1.05, transition: { duration: 0.2 } }
};

const ServiceCard = ({ service }) => {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<motion.div ref={ref} className='text-left p-2' initial='hidden' animate={inView ? 'visible' : 'hidden'} whileHover='hover' variants={fadeIn}>
			<div className='mb-4'>{service.icon}</div>
			<h3 className='text-[18px] font-semibold mb-2'>{service.title}</h3>
			<p className='text-appgray text-base'>{service.description}</p>
		</motion.div>
	);
};

ServiceCard.propTypes = {
	service: PropTypes.shape({
		icon: PropTypes.element.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired
	}).isRequired
};

const Evaluation = () => {
	const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, threshold: 0.1 });

	return (
		<section id='evaluation' className='bg-white py-12'>
			<div className='w-full container mx-auto px-4'>
				<motion.div ref={headerRef} initial='hidden' animate={headerInView ? 'visible' : 'hidden'} variants={fadeIn} className='max-w-[690px] text-left'>
					<h2 className='text-[25px] md:text-[40px] font-semibold mb-[0.7em] text-black tracking-[-0.2px]'>
						Değişen pazarlama ve medya anlayışında yanınızdayız! Dijitali satış kanalı olarak değerlendirmek isterseniz burada olacağız.
					</h2>
					<p className='mb-12 text-appgray text-base'>
						LEVELUP, ürün ve hizmetinize özel; satışlarınızı destekleyici dijital stratejiler, mecra ve etkileşim odaklı fikirler, fonksiyonel
						yazılımlar üreten bir dijital pazarlama ajansıdır.
					</p>
				</motion.div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
					{EvaluationData.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Evaluation;
