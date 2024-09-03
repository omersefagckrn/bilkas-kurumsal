import React, { useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { works } from '../../constants';
import { fromKebabCase, toKebabCase } from '../../helpers/utils';
import { Toast } from 'primereact/toast';

const BlogDetail = () => {
	const { title } = useParams();
	const decodedTitle = fromKebabCase(decodeURIComponent(title));
	const work = works.find((work) => toKebabCase(work.title) === toKebabCase(decodedTitle));

	const navigate = useNavigate();
	const toast = useRef(null);

	const handleCategoryClick = () => {
		toast.current.show({ severity: 'info', summary: 'Bilgi', detail: 'Kategorilere yönlendiriliyorsunuz...', life: 750 });

		setTimeout(() => {
			navigate('/');
			setTimeout(() => {
				window.location.href = '/#blog';
			}, 500);
		}, 500);
	};

	if (!work) {
		return <div className='flex items-center justify-center h-screen text-xl text-gray-700'>Blog bulunamadı.</div>;
	}

	return (
		<div className='container w-full mx-auto'>
			<Toast ref={toast} />
			<div className='flex flex-col py-12 lg:flex-row'>
				<div className='w-full lg:w-3/4 lg:pr-8'>
					<img src={work.image} alt={work.title} className='rounded-sm mb-8 shadow-lg w-full h-[400px] object-cover' />
					<h1 className='mb-4 text-4xl font-bold leading-tight text-gray-800'>{work.title}</h1>
					<ReactMarkdown rehypePlugins={[rehypeRaw]} className='prose prose-lg text-left prose-headings:text-black prose-p:text-gray-700'>
						{work.description}
					</ReactMarkdown>
				</div>
				<div className='w-full lg:w-1/4'>
					<div className='bg-white px-4 py-6 lg:px-[30px] lg:py-[40px] rounded-lg shadow-md mb-8 mt-10 lg:mt-0'>
						<h2 className='text-2xl font-semibold'>Kategoriler</h2>
						<div className='w-12 my-2 border-b-2 border-primary'></div>
						<ul className='mt-4 space-y-2 category-list'>
							{Array.from(new Set(works.map((work) => work.category))).map((category, index) => (
								<li key={index}>
									<Link to='#' onClick={handleCategoryClick} className='text-black hover:underline'>
										{category}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetail;
