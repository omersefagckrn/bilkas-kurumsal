import AppLogo from '../../assets/logo.svg';

const Logo = () => {
	return (
		<div className='flex items-center justify-start'>
			<img src={AppLogo} alt='Logo' className='w-40' />
		</div>
	);
};

export default Logo;
