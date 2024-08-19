import { Link } from 'react-router-dom';
import AppLogo from '../../assets/logo.svg';

const Logo = () => {
	return (
		<Link className='flex items-center justify-center' to='/'>
			<img src={AppLogo} alt='Logo' className='w-36' />
		</Link>
	);
};

export default Logo;
