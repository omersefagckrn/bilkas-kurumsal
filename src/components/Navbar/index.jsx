import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation, Link } from 'react-router-dom';
import NavMobileMenu from './NavMobileMenu';
import { KURUMSAL_EMAIL, KURUMSAL_INSTAGRAM, KURUMSAL_LINKEDIN, KURUMSAL_TIKTOK, NAV_MENU_ITEMS } from '../../constants';
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import Logo from '../Logo';
import { BiSolidOffer } from 'react-icons/bi';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isScrollingUp, setIsScrollingUp] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [anotherPage, setAnotherPage] = useState(false);
	const location = useLocation();

	const controls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true
	});

	useEffect(() => {
		if (location.pathname !== '/') {
			setAnotherPage(true);
		} else {
			setAnotherPage(false);
		}
	}, [location]);

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}

			if (currentScrollY > lastScrollY) {
				setIsScrollingUp(false);
			} else {
				setIsScrollingUp(true);
			}

			lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const slideVariants = {
		hidden: { y: '-100%' },
		visible: { y: 0 }
	};

	return (
		<motion.nav
			className={`fixed w-full top-0 left-0 z-50 bg-white transition-all duration-300 shadow-primary shadow-md whitespace-nowrap ${isScrolled ? 'shadow-lg' : ''}`}
			initial='hidden'
			animate={isScrollingUp ? 'visible' : 'hidden'}
			variants={slideVariants}
		>
			<header className='bg-primary text-white py-3'>
				<div className='container mx-auto px-4'>
					<div className='flex items-center justify-between space-x-2'>
						<a href={`mailto:${KURUMSAL_EMAIL}`} className='flex items-center'>
							<IoMailOutline className='mr-2' />
							<div className='cursor-pointer'>{KURUMSAL_EMAIL}</div>
						</a>
						<div className='flex items-center space-x-4'>
							<a target='_blank' href={KURUMSAL_INSTAGRAM} aria-label='Instagram'>
								<FaInstagram size={16} />
							</a>
							<a target='_blank' href={KURUMSAL_TIKTOK} aria-label='TikTok'>
								<FaTiktok size={16} />
							</a>
							<a target='_blank' href={KURUMSAL_LINKEDIN} aria-label='LinkedIn'>
								<FaLinkedin size={16} />
							</a>
						</div>
					</div>
				</div>
			</header>
			<div className='container mx-auto px-4'>
				<div ref={ref} className='flex items-center justify-between h-20'>
					<Link to='/' className='flex-shrink-0'>
						<Logo />
					</Link>
					{anotherPage ? (
						<Link to='/' className='text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium hidden lg:block'>
							Ana Sayfa
						</Link>
					) : (
						<div className='hidden lg:flex items-center'>
							<div className='ml-10 flex items-baseline space-x-4'>
								{NAV_MENU_ITEMS.map((item) => (
									<a
										key={item.title}
										href={item.href}
										className='text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium'
									>
										{item.title}
									</a>
								))}
							</div>
							<a
								href='#'
								className='ml-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium space-x-2 flex items-center shadow-primary shadow-md'
							>
								<div>Teklif Al</div>
								<BiSolidOffer className='text-white font-bold' size={16} />
							</a>
						</div>
					)}
					<div className='flex lg:hidden'>
						<button onClick={() => setIsMobileMenuOpen(true)} className='text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600'>
							<FiMenu className='h-6 w-6' />
						</button>
					</div>
				</div>
			</div>
			<AnimatePresence>{isMobileMenuOpen && <NavMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} anotherPage={anotherPage} />}</AnimatePresence>
		</motion.nav>
	);
};

export default Navbar;
