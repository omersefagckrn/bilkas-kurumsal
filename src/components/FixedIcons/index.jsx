import { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp, FaCookieBite } from 'react-icons/fa';
import Modal from '../Modal';

const FixedIcons = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const handleOpenModal = () => setIsModalOpen(true);
	const handleCloseModal = () => setIsModalOpen(false);

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<div className='fixed bottom-4 right-4 flex flex-col items-center space-y-2'>
			{isVisible && (
				<button onClick={scrollToTop} className='p-3 bg-primary text-white rounded-full shadow-md hover:bg-primary-dark focus:outline-none'>
					<FaArrowUp size={24} />
				</button>
			)}
			<a
				href='https://wa.me/YOUR_PHONE_NUMBER'
				className='p-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 focus:outline-none'
				target='_blank'
				rel='noopener noreferrer'
			>
				<FaWhatsapp size={24} />
			</a>
			<div className='p-3 bg-primary text-white rounded-full cursor-pointer flex items-center justify-center' onClick={handleOpenModal}>
				<FaCookieBite size={24} />
			</div>
			<Modal header='Çerez Politikası' visible={isModalOpen} onHide={handleCloseModal}>
				<div className='mt-4 text-justify'>
					Sitemizdeki deneyiminizi iyileştirmek için çerezler kullanıyoruz. Çerezler, belirli özelliklerin (sepetinizi kaydetme gibi), sosyal paylaşım
					işlevselliğinin (Facebook, Instagram vb. için) keyfini çıkarmanızı ve mesajları ve reklamları ilgi alanlarınıza göre uyarlamanızı (sitemizde ve
					diğerlerinde) sağlar. Ayrıca sitemizin nasıl kullanıldığını anlamamıza yardımcı olurlar. Sitemizi kullanmaya devam ederek çerez kullanımımızı kabul
					etmiş olursunuz.
				</div>
			</Modal>
		</div>
	);
};

export default FixedIcons;
