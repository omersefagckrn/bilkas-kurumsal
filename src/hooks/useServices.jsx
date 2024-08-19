import { useTranslation } from 'react-i18next';
import { SERVICES_DATA } from '../constants';

export const useServices = () => {
	const { t } = useTranslation();

	const services = SERVICES_DATA(t);

	return services;
};
