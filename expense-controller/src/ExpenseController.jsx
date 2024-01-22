import { useState } from 'react';
import Header from './components/Header';
import NewBudgetIcon from './img/nuevo-gasto.svg';
import { generateID } from './helpers';
import Modal from './components/Modal';
import ExpenseList from './components/ExpenseList';

const ExpenseController = () => {
	const [budget, setBudget] = useState(0);
	const [isValidBudget, setIsValidBudget] = useState(false);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [animateModal, setAnimateModal] = useState(false);

	const [expenses, setExpenses] = useState([]);

	const handleNewExpense = () => {
		setTimeout(() => {
			setAnimateModal(true);
		}, 250);
		setModalIsOpen(true);
	};

	const saveExpense = (expense) => {
		expense.id = generateID();
		expense.date = new Date();
		setExpenses([...expenses, expense]);
		setAnimateModal(false);
		setTimeout(() => {
			setModalIsOpen(false);
		}, 500);
	};

	return (
		<div className={modalIsOpen ? 'fixed' : ''}>
			<Header
				budget={budget}
				setBudget={setBudget}
				isValidBudget={isValidBudget}
				setIsValidBudget={setIsValidBudget}
			/>

			{isValidBudget && (
				<>
					<main>
						<ExpenseList
							expenses={expenses}
							setExpenses={setExpenses}
							budget={budget}
						/>
					</main>
					<div className='new-expense'>
						<img
							src={NewBudgetIcon}
							alt='New Expense Icon'
							onClick={handleNewExpense}
						/>
					</div>
				</>
			)}

			{modalIsOpen && (
				<Modal
					setModalIsOpen={setModalIsOpen}
					animateModal={animateModal}
					setAnimateModal={setAnimateModal}
					saveExpense={saveExpense}
				/>
			)}
		</div>
	);
};

export default ExpenseController;
