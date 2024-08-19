import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation, Link } from 'react-router-dom';
import NavMobileMenu from './NavMobileMenu';
import { KURUMSAL_EMAIL, KURUMSAL_INSTAGRAM, KURUMSAL_LINKEDIN, KURUMSAL_NUMARA, KURUMSAL_TIKTOK, KURUMSAL_FACEBOOK } from '../../constants';
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import Logo from '../Logo';
import { BiSolidOffer } from 'react-icons/bi';
import { useMenuItems } from '../../hooks/useMenuItems';
import LanguageSwitcher from '../../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isScrollingUp, setIsScrollingUp] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [anotherPage, setAnotherPage] = useState(false);
	const location = useLocation();
	const { t } = useTranslation();
	const controls = useAnimation();
	const menuItems = useMenuItems();

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
			<header className='py-3 text-white bg-primary'>
				<div className='container flex items-center justify-between w-full px-4 mx-auto'>
					<a href={`mailto:${KURUMSAL_EMAIL}`} className='flex items-center'>
						<IoMailOutline className='mr-2' />
						<span className='cursor-pointer'>{KURUMSAL_EMAIL}</span>
					</a>
					<div className='flex items-center space-x-4'>
						<a target='_blank' href={KURUMSAL_FACEBOOK} aria-label='Facebook'>
							<FaFacebook size={16} />
						</a>
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
			</header>
			<nav className='container px-4 mx-auto lg:px-0'>
				<div ref={ref} className='flex items-center justify-between h-20'>
					<Link to='/' className='flex-shrink-0'>
						<Logo />
					</Link>

					<div>
						{anotherPage ? (
							<Link to='/' className='hidden px-3 py-2 text-sm font-medium text-gray-800 rounded-md hover:text-gray-600 lg:block'>
								{t('nav.home')}
							</Link>
						) : (
							<div className='items-center hidden space-x-4 lg:flex'>
								{menuItems.map((item) => (
									<a
										key={item.title}
										href={item.href}
										className='px-3 py-2 text-base font-medium text-gray-800 rounded-md hover:text-gray-600'
									>
										{item.title}
									</a>
								))}
							</div>
						)}
					</div>

					<div className='flex items-center space-x-2'>
						<a
							href={`tel:${KURUMSAL_NUMARA}`}
							className='items-center hidden px-4 py-2 space-x-2 text-sm font-medium text-white rounded-full shadow-md lg:flex bg-primary shadow-primary'
						>
							<span>{t('nav.offer')}</span>
							<BiSolidOffer className='font-bold text-white' size={16} />
						</a>
						{!anotherPage && (
							<div className='hidden lg:flex'>
								<LanguageSwitcher />
							</div>
						)}
					</div>
					<div className='flex items-center lg:hidden'>
						{!anotherPage && <LanguageSwitcher />}
						<button onClick={() => setIsMobileMenuOpen(true)} className='ml-2 text-gray-800 hover:text-gray-600 focus:outline-none'>
							<FiMenu className='w-6 h-6' />
						</button>
					</div>
				</div>
			</nav>
			<AnimatePresence>{isMobileMenuOpen && <NavMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} anotherPage={anotherPage} />}</AnimatePresence>
		</motion.nav>
	);
};

export default Navbar;
