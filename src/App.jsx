import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Evaluation from './components/Evaluation';
import Pricing from './components/Pricing';
import FixedIcons from './components/FixedIcons';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Banner from './components/Banner';

const App = () => {
	return (
		<main className='flex flex-col min-h-screen select-none'>
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
		</main>
	);
};

export default App;
