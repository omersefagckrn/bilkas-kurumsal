import { Link } from 'react-router-dom';
import AppLogo from '../../assets/logo.svg';

const Logo = () => {
	return (
		<Link to='/' className='flex items-center justify-center'>
			<img src={AppLogo} alt='Logo' className='w-36' />
		</Link>
	);
};

export default Logo;
