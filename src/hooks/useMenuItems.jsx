import { useTranslation } from 'react-i18next';
import { NAV_MENU_ITEMS } from '../constants';

export const useMenuItems = () => {
	const { t } = useTranslation();

	const menuItems = NAV_MENU_ITEMS(t);

	return menuItems;
};
