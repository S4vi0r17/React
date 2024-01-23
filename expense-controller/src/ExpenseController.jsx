import { useState, useEffect } from 'react';
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

	const [editExpense, setEditExpense] = useState({});

	useEffect(() => {
		if (Object.keys(editExpense).length > 0) {
			setTimeout(() => {
				setAnimateModal(true);
			}, 250);
			setModalIsOpen(true);
		}
	}, [editExpense]);

	const handleNewExpense = () => {
		setTimeout(() => {
			setAnimateModal(true);
		}, 250);
		setModalIsOpen(true);
		setEditExpense({});
	};

	const saveExpense = (expense) => {
		if (expense.id) {
			const newExpenses = expenses.map((item) =>
				item.id === expense.id ? expense : item
			);
			setExpenses(newExpenses);
			setEditExpense({});
		} else {
			expense.id = generateID();
			expense.date = new Date();
			setExpenses([...expenses, expense]);
		}

		setAnimateModal(false);
		setTimeout(() => {
			setModalIsOpen(false);
		}, 500);
	};

	const deleteExpense = (id) => {
		const newExpenses = expenses.filter((expense) => expense.id !== id);
		setExpenses(newExpenses);
	};

	return (
		<div className={modalIsOpen ? 'fixed' : ''}>
			<Header
				expenses={expenses}
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
							setEditExpense={setEditExpense}
							deleteExpense={deleteExpense}
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
					editExpense={editExpense}
					setEditExpense={setEditExpense}
				/>
			)}
		</div>
	);
};

export default ExpenseController;
