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
		return <div className='flex items-center justify-center h-screen text-xl text-gray-700'>Blog bulunamadı.</div>;
	}

	return (
		<>
			<Navbar />
			<main className='flex flex-col min-h-screen pt-32 select-none bg-gray-50'>
				<div className='container flex flex-col w-full px-4 py-12 mx-auto lg:flex-row'>
					<div className='w-full lg:w-3/4 lg:pr-8'>
						<img src={work.image} alt={work.title} className='rounded-sm mb-8 shadow-lg w-full h-[400px]' />
						<h1 className='mb-4 text-4xl font-semibold leading-tight text-gray-800'>{work.title}</h1>
						<p className='text-lg leading-relaxed text-justify text-gray-700'>{work.description}</p>
					</div>
					<div className='w-full lg:w-1/4'>
						<div className='bg-white px-4 py-6 lg:px-[30px] lg:py-[40px] rounded-lg shadow-md mb-8 mt-10 lg:mt-0'>
							<h2 className='text-2xl font-semibold'>Kategoriler</h2>
							<div className='w-12 my-2 border-b-2 border-primary'></div>
							<ul className='mt-4 space-y-2 category-list'>
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
