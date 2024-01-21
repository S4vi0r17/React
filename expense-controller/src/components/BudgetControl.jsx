import PropTypes from 'prop-types';

const BudgetControl = ({ budget }) => {
    const formatBudget = (budget) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(budget);
    };

    return (
        <div className='budget-container container shadow two-columns'>
            <div>
                <p>Graph</p>
            </div>
            <div className='budget-content'>
                <p>
                    <span>Remaining: </span>
                    {formatBudget(budget)}
                </p>

                <p>
                    <span>Available: </span>
                    {formatBudget(budget)}
                </p>

                <p>
                    <span>Spent: </span>
                    {formatBudget(budget)}
                </p>
            </div>
        </div>
    );
};

BudgetControl.propTypes = {
	budget: PropTypes.number.isRequired,
};

export default BudgetControl;
