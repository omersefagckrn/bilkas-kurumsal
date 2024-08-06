import Navbar from '../Navbar';
import Footer from '../Footer';
import Evaluation from '../Evaluation';
import Pricing from '../Pricing';
import FixedIcons from '../FixedIcons';
import Services from '../Services';
import Solutions from '../Solutions';
import Banner from '../Banner';

const Home = () => {
	return (
		<>
			<div className='flex flex-col min-h-screen select-none'>
				<Navbar />
				<div className='flex-grow pt-24'>
					<Banner />
					<Evaluation />
					<Pricing />
					<Solutions />
					<Services />
				</div>
				<Footer />
				<FixedIcons />
			</div>
		</>
	);
};

export default Home;
