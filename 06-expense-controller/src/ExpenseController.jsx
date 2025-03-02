import { useState, useEffect } from 'react';
import Header from './components/Header';
import NewBudgetIcon from './img/nuevo-gasto.svg';
import { generateID } from './helpers';
import Modal from './components/Modal';
import ExpenseList from './components/ExpenseList';
import Filters from './components/Filters';

const ExpenseController = () => {
	const [budget, setBudget] = useState(
		Number(localStorage.getItem('budget')) ?? 0
	);
	const [isValidBudget, setIsValidBudget] = useState(false);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [animateModal, setAnimateModal] = useState(false);

	const [expenses, setExpenses] = useState(
		localStorage.getItem('expenses')
			? JSON.parse(localStorage.getItem('expenses'))
			: []
	);

	const [editExpense, setEditExpense] = useState({});

	// State for filters
	const [filter, setFilter] = useState('');
	const [filteredExpenses, setFilteredExpenses] = useState([]);

	useEffect(() => {
		if (filter) {
			const filteredExpenses = expenses.filter(
				(expense) => expense.category === filter
			);
			setFilteredExpenses(filteredExpenses);
		}
	}, [filter]);

	useEffect(() => {
		if (Object.keys(editExpense).length > 0) {
			setTimeout(() => {
				setAnimateModal(true);
			}, 250);
			setModalIsOpen(true);
		}
	}, [editExpense]);

	useEffect(() => {
		localStorage.setItem('budget', budget ?? 0);
	}, [budget]);

	useEffect(() => {
		const budgetLocalStorage = Number(localStorage.getItem('budget')) ?? 0;

		if (budgetLocalStorage > 0) {
			setIsValidBudget(true);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
	}, [expenses]);

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
				setExpenses={setExpenses}
				budget={budget}
				setBudget={setBudget}
				isValidBudget={isValidBudget}
				setIsValidBudget={setIsValidBudget}
			/>

			{isValidBudget && (
				<>
					<main>
						<Filters filter={filter} setFilter={setFilter} />
						<ExpenseList
							expenses={expenses}
							setExpenses={setExpenses}
							budget={budget}
							setEditExpense={setEditExpense}
							deleteExpense={deleteExpense}
							filter={filter}
							filteredExpenses={filteredExpenses}
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
