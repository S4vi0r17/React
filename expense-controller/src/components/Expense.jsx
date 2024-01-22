import PropTypes from 'prop-types';
import { formatTime } from '../helpers';
import SavingIcon from '../img/icono_ahorro.svg';
import HousingIcon from '../img/icono_casa.svg';
import FoodIcon from '../img/icono_comida.svg';
import LeisureIcon from '../img/icono_ocio.svg';
import EntertainmentIcon from '../img/icono_ocio.svg';
import HealthIcon from '../img/icono_salud.svg';
import SuscriptionsIcon from '../img/icono_suscripciones.svg';

const icons = {
	savings: SavingIcon,
	food: FoodIcon,
	housing: HousingIcon,
	miscellaneous: LeisureIcon,
	entertainment: EntertainmentIcon,
	health: HealthIcon,
	subscriptions: SuscriptionsIcon,
};

const Expense = ({ expense }) => {
	return (
		<div className='expense shadow'>
			<div className='expense-content'>
				<img src={icons[expense.category]} alt='Expense Icon' />
				<div className='expense-description'>
					<p className='category'>{expense.category}</p>
					<p className='expense-name'>{expense.concept}</p>
					<p className='expense-date'>
						Added on:
						<span> {formatTime(expense.date)}</span>
					</p>
				</div>
			</div>
			<p className='expense-amount'>${expense.amount}</p>
		</div>
	);
};

Expense.propTypes = {
	expense: PropTypes.object.isRequired,
};

export default Expense;
