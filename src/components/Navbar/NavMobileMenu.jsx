import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NAV_MENU_ITEMS } from '../../constants';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { BiSolidOffer } from 'react-icons/bi';

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

const NavMobileMenu = ({ isOpen, onClose }) => {
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
			className='fixed inset-0 z-50 bg-primary flex flex-col justify-center items-center md:hidden overflow-hidden text-center'
			initial='closed'
			animate={isOpen ? 'open' : 'closed'}
			variants={variants}
		>
			<button onClick={onClose} className='absolute top-4 right-4 text-white text-3xl'>
				<FiX />
			</button>
			<div className='flex flex-col space-y-6'>
				{NAV_MENU_ITEMS.map((item) => (
					<a key={item.title} href={item.href} className='text-white hover:text-appgray text-2xl' onClick={onClose}>
						{item.title}
					</a>
				))}
				<a href='#' className='bg-white text-primary px-6 py-3 rounded-full text-2xl font-medium' onClick={onClose}>
					Teklif Al <BiSolidOffer />
				</a>
			</div>
		</motion.div>
	);
};

NavMobileMenu.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default NavMobileMenu;
