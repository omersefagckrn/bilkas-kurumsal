import Evaluation from '../Evaluation';
import Services from '../Services';
import Blog from '../Blog';
import Banner from '../Banner';
import Teams from '../Teams';
import OurSupports from '../OurSupports';

const Home = () => {
	return (
		<>
			<Banner />
			<Evaluation />
			<Teams />
			<OurSupports />
			<Blog />
			<Services />
		</>
	);
};

export default Home;
