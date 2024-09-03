import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import BlogDetail from './components/Blog/BlogDetail';
import EvaluationDetail from './components/Evaluation/EvaluationDetail';
import Layout from './components/Layout';
import About from './components/About';

import './index.css';
import './i18n';
import '../node_modules/primereact/resources/themes/saga-blue/theme.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Home />
			</Layout>
		)
	},
	{
		path: '/blog/:title',
		element: (
			<Layout>
				<BlogDetail />
			</Layout>
		)
	},
	{
		path: '/evaluation/:title',
		element: (
			<Layout>
				<EvaluationDetail />
			</Layout>
		)
	},
	{
		path: '/about',
		element: (
			<Layout>
				<About />
			</Layout>
		)
	}
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
