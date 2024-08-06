import { Link, useParams } from 'react-router-dom';
import { works } from '../../constants';
import FixedIcons from '../FixedIcons';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { fromKebabCase, toKebabCase } from '../../helpers/utils';
import { useEffect } from 'react';

const BlogDetail = () => {
	const { title } = useParams();
	const decodedTitle = fromKebabCase(decodeURIComponent(title));
	const work = works.find((work) => toKebabCase(work.title) === toKebabCase(decodedTitle));

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!work) {
		return <div className='flex justify-center items-center h-screen text-gray-700 text-xl'>Blog bulunamadı.</div>;
	}

	return (
		<>
			<Navbar />
			<main className='flex flex-col min-h-screen select-none pt-32 bg-gray-50'>
				<div className='container mx-auto px-4 py-12 flex flex-col lg:flex-row'>
					<div className='w-full lg:w-3/4 lg:pr-8'>
						<img src={work.image} alt={work.title} className='rounded-sm mb-8 shadow-lg w-full h-[400px]' />
						<h1 className='text-4xl font-semibold mb-4 text-gray-800 leading-tight'>{work.title}</h1>
						<p className='text-lg text-gray-700 leading-relaxed text-justify'>{work.description}</p>
					</div>
					<div className='w-full lg:w-1/4'>
						<div className='bg-white px-4 py-6 lg:px-[30px] lg:py-[40px] rounded-lg shadow-md mb-8 mt-10 lg:mt-0'>
							<h2 className='text-2xl font-semibold'>Kategoriler</h2>
							<div className='border-b-2 my-2 border-primary w-12'></div>
							<ul className='category-list space-y-2 mt-4'>
								{Array.from(new Set(works.map((work) => work.category))).map((category, index) => (
									<li key={index}>
										<Link to='/' className='text-black hover:underline'>
											{category}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<Footer />
				<FixedIcons />
			</main>
		</>
	);
};

export default BlogDetail;
