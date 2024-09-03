import { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const op = useRef(null);

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		op.current.hide();
	};

	return (
		<div className='relative'>
			<button onClick={(e) => op.current.toggle(e)} className='flex items-center justify-center p-2 text-white rounded-full bg-primary focus:outline-none'>
				<FiGlobe size={20} />
			</button>

			<OverlayPanel ref={op} className='w-full lg:w-[250px] p-overlaypanel-arrow'>
				<div className='flex flex-col p-1'>
					<button onClick={() => changeLanguage('tr')} className='w-full py-2 mb-2 text-lg font-semibold text-white rounded-lg bg-primary focus:outline-none'>
						Türkçe
					</button>
					<button onClick={() => changeLanguage('en')} className='w-full py-2 text-lg font-semibold text-white rounded-lg bg-primary focus:outline-none'>
						English
					</button>
				</div>
			</OverlayPanel>
		</div>
	);
};

export default LanguageSwitcher;
