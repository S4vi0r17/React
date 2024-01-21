import { useState } from 'react';
import Header from './components/Header';
import NewBudgetIcon from './img/nuevo-gasto.svg';
import Modal from './components/Modal';

const ExpenseController = () => {
	const [budget, setBudget] = useState(0);
	const [isValidBudget, setIsValidBudget] = useState(false);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [animateModal, setAnimateModal] = useState(false);

	const handleNewExpense = () => {
		setTimeout(() => {
			setAnimateModal(true);
		}, 250);
		setModalIsOpen(true);
	};

	return (
		<div>
			<Header
				budget={budget}
				setBudget={setBudget}
				isValidBudget={isValidBudget}
				setIsValidBudget={setIsValidBudget}
			/>

			{isValidBudget && (
				<div className='new-expense'>
					<img
						src={NewBudgetIcon}
						alt='New Expense Icon'
						onClick={handleNewExpense}
					/>
				</div>
			)}

			{modalIsOpen && <Modal
                setModalIsOpen={setModalIsOpen}
                animateModal={animateModal}
                setAnimateModal={setAnimateModal}
            />}
		</div>
	);
};

export default ExpenseController;
