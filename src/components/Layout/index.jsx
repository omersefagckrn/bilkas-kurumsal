import Navbar from '../Navbar';
import Footer from '../Footer';
import FixedIcons from '../FixedIcons';
import ScrollToTop from '../ScrollToTop';

const Layout = ({ children }) => {
	return (
		<>
			<ScrollToTop />
			<div className='flex flex-col justify-between w-full min-h-screen'>
				<Navbar />
				<div className='pt-32'>{children}</div>
				<Footer />
			</div>
			<FixedIcons />
		</>
	);
};

export default Layout;
