import { Link, useParams } from 'react-router-dom';
import FixedIcons from '../FixedIcons';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { fromKebabCase, toKebabCase } from '../../helpers/utils';
import { useEffect } from 'react';
import { EvaluationData } from '.';

const EvaluationDetail = () => {
	const { title } = useParams();
	const decodedTitle = fromKebabCase(decodeURIComponent(title));
	const evaluation = EvaluationData.find((evaluation) => toKebabCase(evaluation.title) === toKebabCase(decodedTitle));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!evaluation) {
		return <div className='flex justify-center items-center h-screen text-gray-700 text-xl'>Hizmet bulunamadı.</div>;
	}

	return (
		<>
			<main className='flex flex-col min-h-screen select-none pt-32'>
				<Navbar />
				<div className='flex-grow'>
					<div className='container mx-auto px-4 py-12 flex flex-col lg:flex-row'>
						<div className='w-full'>
							<h1 className='text-4xl font-semibold mb-4 text-gray-800 leading-tight'>{evaluation.title}</h1>
							<p className='text-lg text-gray-700 leading-relaxed text-justify'>{evaluation.description}</p>
						</div>
					</div>
				</div>
				<Footer />
				<FixedIcons />
			</main>
		</>
	);
};

export default EvaluationDetail;
