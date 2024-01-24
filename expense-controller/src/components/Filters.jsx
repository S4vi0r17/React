import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Filters = ({ filter, setFilter }) => {
	return (
		<div className='filters container shadow'>
			<form className='field'>
				<label>Filter by category:</label>
				<select
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				>
					<option value=''>All</option>
					<option value='savings'>Savings</option>
					<option value='food'>Food</option>
					<option value='housing'>Housing</option>
					<option value='miscellaneous'>
						Miscellaneous Expenses
					</option>
					<option value='entertainment'>Entertainment</option>
					<option value='health'>Health</option>
					<option value='subscriptions'>Subscriptions</option>
				</select>
			</form>
		</div>
	);
};

Filters.propTypes = {
	filter: PropTypes.string.isRequired,
	setFilter: PropTypes.func.isRequired,
};

export default Filters;
