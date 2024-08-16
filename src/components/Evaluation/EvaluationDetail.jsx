import { useParams } from 'react-router-dom';
import FixedIcons from '../FixedIcons';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { fromKebabCase, toKebabCase } from '../../helpers/utils';
import { useEffect } from 'react';
import { EvaluationData } from '../../constants';

const EvaluationDetail = () => {
	const { title } = useParams();
	const decodedTitle = fromKebabCase(decodeURIComponent(title));
	const evaluation = EvaluationData.find((evaluation) => toKebabCase(evaluation.title) === toKebabCase(decodedTitle));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!evaluation) {
		return <div className='flex items-center justify-center h-screen text-xl text-gray-700'>Hizmet bulunamadı.</div>;
	}

	return (
		<>
			<main className='flex flex-col min-h-screen pt-32 select-none'>
				<Navbar />
				<div className='flex-grow'>
					<div className='container flex flex-col px-4 py-12 mx-auto lg:flex-row'>
						<div className='w-full'>
							<h1 className='mb-4 text-4xl font-semibold leading-tight text-gray-800'>{evaluation.title}</h1>
							<p className='leading-relaxed text-justify text-gray-700 text-[14px]'>{evaluation.description}</p>
							<p className='text-xs text-[20px] mt-4 font-semibold'>{evaluation.detail}</p>
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
