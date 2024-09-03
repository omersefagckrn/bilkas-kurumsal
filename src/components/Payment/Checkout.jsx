import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { FaInfoCircle } from 'react-icons/fa';

const Checkout = () => {
	const location = useLocation();
	const { plan } = location.state || {};

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.5 } }
	};

	const initialValues = {
		name: 'Ömer Sefa',
		surname: 'Güçkıran',
		email: 'omergckrnx@gmail.com',
		phone: '5078455183',
		address: 'hürriyet mahallesi karacaoğlan sokak no.3 daire.6 ist/kartal',
		city: 'İstanbul',
		country: 'Türkiye',
		postcode: '34000'
	};

	const validationSchema = Yup.object({
		name: Yup.string()
			.required('Zorunlu')
			.matches(/^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/, 'Sadece harfler kullanılabilir'),
		surname: Yup.string()
			.required('Zorunlu')
			.matches(/^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/, 'Sadece harfler kullanılabilir'),
		email: Yup.string().email('Geçersiz email formatı').required('Zorunlu'),
		phone: Yup.string().required('Zorunlu'),
		address: Yup.string().required('Zorunlu').min(10, 'Adres en az 10 karakter olmalı'),
		city: Yup.string()
			.required('Zorunlu')
			.matches(/^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/, 'Sadece harfler kullanılabilir'),
		country: Yup.string()
			.required('Zorunlu')
			.matches(/^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/, 'Sadece harfler kullanılabilir'),
		postcode: Yup.string().required('Zorunlu').matches(/^\d+$/, 'Posta kodu sadece rakam olmalıdır')
	});

	const handlePayment = async (values) => {
		try {
			const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/payments/create-payment`, {
				orderId: String(Math.floor(Math.random() * 100000)),
				buyer: values,
				address: {
					address: values.address,
					city: values.city,
					country: values.country,
					postcode: values.postcode
				},
				plan: plan
			});

			const paymentPage = response.data;
			const paymentWindow = window.open('', '_blank');
			paymentWindow.document.write(paymentPage);
			paymentWindow.document.close();

			paymentWindow.onload = () => {
				paymentWindow.addEventListener('beforeunload', function () {
					window.location.href = '/success';
				});
			};
		} catch (error) {
			console.error('Payment failed:', error);
		}
	};

	return (
		<motion.div initial='hidden' animate={inView ? 'visible' : 'hidden'} variants={containerVariants} ref={ref} className='container w-full mx-auto'>
			<div className='py-10'>
				<h1 className='mb-6 text-2xl font-bold text-left'>Ödemeyi Tamamla</h1>
				<div className='flex flex-col items-center p-3 mb-10 text-justify bg-yellow-100 rounded-lg lg:flex-row lg:items-start lg:text-left'>
					<FaInfoCircle className='object-cover mb-2 text-yellow-400 lg:mb-0 lg:mr-2' size={30} />
					<span className='text-center text-gray-800 lg:text-left'>
						Fatura adresi ve ödeme bilgileri aynıdır. Lütfen aşağıdaki formu doldurarak ödeme işlemini tamamlayabilirsin. Ödeme işlemi sırasında
						herhangi bir sorunla karşılaşırsan yukarıdan bize ulaşabilirsin.
					</span>
				</div>

				<div className='flex flex-col justify-between lg:flex-row'>
					<div className='w-full lg:pr-6 lg:w-2/3'>
						<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handlePayment}>
							<Form className='space-y-4'>
								<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
									{[
										{ id: 'name', label: 'İsim' },
										{ id: 'surname', label: 'Soyisim' },
										{ id: 'email', label: 'Email', type: 'email' },
										{ id: 'phone', label: 'Tel', mask: '(999) 999-9999', component: InputMask },
										{ id: 'address', label: 'Tam Adres' },
										{ id: 'city', label: 'Şehir' },
										{ id: 'country', label: 'Ülke' },
										{ id: 'postcode', label: 'Posta Kodu', mask: '99999', component: InputMask }
									].map(({ id, label, type = 'text', mask, component = InputText }) => (
										<div key={id}>
											<label htmlFor={id} className='block mb-2 font-bold'>
												{label}
											</label>
											<Field
												as={component}
												id={id}
												name={id}
												type={type}
												mask={mask}
												className='w-full p-2 mb-2 border border-black rounded ring-0'
											/>
											<ErrorMessage name={id} component='div' className='text-red-500' />
										</div>
									))}
								</div>

								<button type='submit' className='w-full px-4 py-2 text-white transition rounded-md bg-primary'>
									Ödemeyi Tamamla
								</button>
							</Form>
						</Formik>
					</div>

					<div className='w-full lg:w-1/3'>
						<h2 className='mt-2 mb-1 text-xl font-bold text-left lg:mt-0'>Seçtiğiniz Plan</h2>
						<div className='p-4 border border-gray-300 rounded-md'>
							<p className='mb-2 text-lg font-bold'>{plan?.name ?? 'Ürün Adı'}</p>
							<p className='mb-2'>{plan?.description ?? 'Ürün Açıklaması'}</p>
							<p className='mb-2 text-lg font-bold'>Fiyat: {plan?.price ?? 'Fiyat Yok'} TL</p>

							<ul className='list-disc list-inside'>
								{plan?.features &&
									Object.entries(plan.features).map(([category, items], index) => (
										<li className='mt-2' key={index}>
											<strong>{category}:</strong>
											<ul className='ml-4 list-disc list-inside'>
												{items.map((item, subIndex) => (
													<li key={subIndex}>{item}</li>
												))}
											</ul>
										</li>
									))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Checkout;
