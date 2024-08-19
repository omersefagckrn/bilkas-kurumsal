import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import BlogDetail from './components/Solutions/SolutionsDetail';
import EvaluationDetail from './components/Evaluation/EvaluationDetail';

import './index.css';
import './i18n';

import 'primereact/resources/themes/saga-blue/theme.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/blog/:title',
		element: <BlogDetail />
	},
	{
		path: '/evaluation/:title',
		element: <EvaluationDetail />
	}
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
