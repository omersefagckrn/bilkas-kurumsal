import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SuccessPaymentImg from '../../assets/success-payment.jpg';
import { Card } from 'primereact/card';
import { FaDownload } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { KURUMSAL_NUMARA } from '../../constants';

const PaymentSuccessPage = () => {
	const location = useLocation();
	const params = new URLSearchParams(location.search);

	const orderData = {
		order_id: params.get('order_id') ?? 'N/A',
		payment_id: params.get('payment_id') ?? 'N/A',
		installment: params.get('installment') ?? 'N/A'
	};

	if (window.opener) {
		window.opener.location.href = `/success?order_id=${orderData.order_id}&payment_id=${orderData.payment_id}&installment=${orderData.installment}`;
		window.close();
	}

	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const containerVariants = {
		hidden: { opacity: 0, y: 100, scale: 0.8 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.8, when: 'beforeChildren', staggerChildren: 0.3 }
		}
	};

	const bounceVariants = {
		hidden: { scale: 0.3, y: -100, opacity: 0 },
		visible: {
			scale: [1.2, 0.9, 1],
			y: [0, -15, 0],
			opacity: 1,
			transition: { duration: 0.8, ease: 'easeOut' }
		}
	};

	const downloadPdf = () => {
		const input = document.getElementById('pdf-content');
		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF();
			const imgWidth = pdf.internal.pageSize.getWidth();
			const imgHeight = (canvas.height * imgWidth) / canvas.width;
			pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
			pdf.save(`Bilkas-Dijital-Siparisin-${orderData.order_id}.pdf`);
		});
	};

	return (
		<motion.div initial='hidden' animate={inView ? 'visible' : 'hidden'} variants={containerVariants} ref={ref} className='container w-full px-6 mx-auto lg:px-0'>
			<div className='py-10'>
				<motion.div className='flex flex-col items-center justify-center' variants={bounceVariants}>
					<img src={SuccessPaymentImg} alt='Success' className='mb-6 rounded-full w-52 h-52' />
					<Card
						id='pdf-content'
						subTitle='Yeni paketinizi sizler için kusursuz işleyeceğiz! Aşağıdaki detaylar siparişinize aittir.'
						title='Ödeme Başarıyla Tamamlandı 🎉'
						className='w-full max-w-lg p-6 text-center text-green-600 bg-white rounded-lg shadow-md'
					>
						<ul className='text-gray-800 list-none '>
							<li className='mb-2'>
								<strong>Sipariş ID:</strong> {orderData.order_id}
							</li>
							<li className='mb-2'>
								<strong>Ödeme ID:</strong> {orderData.payment_id}
							</li>
						</ul>
						<p className='mt-4 text-lg text-gray-600'></p>
						<div className='flex flex-col mt-6 space-y-4 text-gray-700'>
							<div className='font-semibold'>
								Destek Hattı:{' '}
								<a href={`tel:${KURUMSAL_NUMARA}`} className='underline text-primary underline-offset-2'>
									{KURUMSAL_NUMARA}
								</a>
							</div>
						</div>
					</Card>
					<button
						onClick={downloadPdf}
						className='flex items-center justify-center px-4 py-2 mt-6 text-white transition bg-blue-600 rounded-md hover:bg-blue-700'
					>
						<FaDownload className='mr-2' />
						Sayfayı PDF İndir
					</button>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default PaymentSuccessPage;
