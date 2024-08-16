import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { KURUMSAL_NUMARA, NAV_MENU_ITEMS } from '../../constants';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { BiSolidOffer } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const variants = {
	open: {
		opacity: 1,
		height: '100vh',
		transition: {
			duration: 0.3
		}
	},
	closed: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.3
		}
	}
};

const NavMobileMenu = ({ isOpen, onClose, anotherPage }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<motion.div
			className='fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden text-center bg-primary md:hidden'
			initial='closed'
			animate={isOpen ? 'open' : 'closed'}
			variants={variants}
		>
			<button onClick={onClose} className='absolute text-3xl text-white top-4 right-4'>
				<FiX />
			</button>
			<div className='flex flex-col space-y-6'>
				{anotherPage ? (
					<>
						<Link to='/' className='text-2xl text-white hover:text-appgray' onClick={onClose}>
							Ana Sayfa
						</Link>
						<a
							href={`tel:${KURUMSAL_NUMARA}`}
							className='flex items-center px-4 py-2 space-x-2 text-base font-medium bg-white rounded-full shadow-md text-primary shadow-primary'
						>
							<div>Teklif Al</div>
							<BiSolidOffer className='font-bold text-primary' size={16} />
						</a>
					</>
				) : (
					<>
						{NAV_MENU_ITEMS.map((item) => (
							<a key={item.title} href={item.href} className='text-2xl text-white hover:text-appgray' onClick={onClose}>
								{item.title}
							</a>
						))}
						<a
							href={`tel:${KURUMSAL_NUMARA}`}
							className='flex items-center justify-center px-4 py-2 space-x-2 text-base font-medium text-center bg-white rounded-full shadow-md text-primary shadow-primary'
						>
							<div>Teklif Al</div>
							<BiSolidOffer className='font-bold text-primary' size={16} />
						</a>
					</>
				)}
			</div>
		</motion.div>
	);
};

NavMobileMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	anotherPage: PropTypes.bool.isRequired
};

export default NavMobileMenu;
