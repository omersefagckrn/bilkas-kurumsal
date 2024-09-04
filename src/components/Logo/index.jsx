import AppLogo from '../../assets/logo.svg';
import { HashLink } from 'react-router-hash-link';

const Logo = () => {
	return (
		<HashLink to='/' className='flex items-center justify-center'>
			<img src={AppLogo} alt='Logo' className='w-36' />
		</HashLink>
	);
};

export default Logo;
