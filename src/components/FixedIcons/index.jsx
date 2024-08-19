import { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp, FaCookieBite, FaPhone } from 'react-icons/fa';
import Modal from '../Modal';
import { KURUMSAL_NUMARA } from '../../constants';
import { useTranslation } from 'react-i18next';

const FixedIcons = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	return (
		<div className='fixed flex flex-col items-center space-y-2 bottom-4 right-4'>
			{isVisible && (
				<button onClick={scrollToTop} className='p-3 text-white bg-black rounded-full shadow-md'>
					<FaArrowUp size={24} />
				</button>
			)}
			<a
				href='https://api.whatsapp.com/send?phone=905312971288&text=Merhaba.%20Ajansınızdan%20hizmetleriniz%20hakkında%20bilgi%20ve%20fiyat%20teklifi%20alabilir%20miyim?'
				target='_blank'
				className='p-3 text-white bg-green-600 rounded-full shadow-md'
				rel='noopener noreferrer'
			>
				<FaWhatsapp className='text-white' size={24} />
			</a>
			<a href={`tel:${KURUMSAL_NUMARA}`} className='p-3 text-white bg-green-600 rounded-full shadow-md phone-icon'>
				<FaPhone className='text-white' size={24} />
			</a>
			<div className='flex items-center justify-center p-3 text-white rounded-full cursor-pointer bg-primary' onClick={handleOpenModal}>
				<FaCookieBite size={24} />
			</div>
			<Modal header={t('cookiePolicy.button')} visible={isModalOpen} onHide={handleCloseModal}>
				<div className='mt-4 text-justify'>{t('cookiePolicy.message')}</div>
			</Modal>
		</div>
	);
};

export default FixedIcons;
