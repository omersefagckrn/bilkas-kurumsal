import PropTypes from 'prop-types'; // PropTypes paketini ekliyoruz
import { Dialog } from 'primereact/dialog';

const Modal = ({ header, visible, onHide, children }) => {
	return (
		<Dialog
			headerClassName='text-primary font-semibold'
			modal
			maximizable={window.outerWidth > 775 ? false : true}
			header={header}
			visible={visible}
			onHide={onHide}
			className='w-full lg:max-w-[774px]'
			headerStyle={{
				paddingBottom: '0rem'
			}}
		>
			{children}
		</Dialog>
	);
};

Modal.propTypes = {
	header: PropTypes.string.isRequired,
	visible: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired,
	children: PropTypes.node
};

export default Modal;
