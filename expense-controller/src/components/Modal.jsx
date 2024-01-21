import PropTypes from 'prop-types';
import CloseIcon from '../img/cerrar.svg';

const Modal = ({setModalIsOpen, animateModal, setAnimateModal}) => {
	const closeModal = () => {
		
        setAnimateModal(false);

        setTimeout(() => {
            setModalIsOpen(false);
        }, 500);
	};

	return (
		<div className='modal'>
			<div className='close-modal'>
				<img
                    src={CloseIcon}
                    alt='Close Icon'
                    onClick={closeModal}
                />
			</div>

            <form
                className={`form ${animateModal ? 'animate' : 'close'}`}
            >
                <legend>New Expense</legend>
            </form>
		</div>
	);
};

Modal.propTypes = {
    setModalIsOpen: PropTypes.func.isRequired,
    animateModal: PropTypes.bool.isRequired,
    setAnimateModal: PropTypes.func.isRequired
};

export default Modal;
