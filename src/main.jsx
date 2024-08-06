import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home';
import BlogDetail from './components/Solutions/SolutionsDetail';

import './index.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/blog/:title',
		element: <BlogDetail />
	}
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
