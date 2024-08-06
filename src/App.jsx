import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogDetail from './components/Solutions/SolutionsDetail';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/blog/:title' element={<BlogDetail />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
