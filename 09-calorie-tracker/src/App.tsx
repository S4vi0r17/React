import { useReducer } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { activityReducer, initialState } from './reducers/activity.reducer';
import { ActivityList } from './components/ActivityList';

const App = () => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  const caloriesConsumed = state.activities
    .filter((activity) => activity.category === 1)
    .reduce((sum, activity) => sum + Number(activity.calories), 0);

  const caloriesBurned = state.activities
    .filter((activity) => activity.category === 2)
    .reduce((sum, activity) => sum + Number(activity.calories), 0);

  const caloriesDifference = caloriesConsumed - caloriesBurned;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E1A4] to-[#F5B78A] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header handleReset={() => {}} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Form state={state} dispatch={dispatch} />

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-[#E95A6C]">Summary</h2>
            <div className="bg-gradient-to-br from-[#F5E1A4] to-[#F5B78A] p-6 rounded-xl">
              <div className="grid grid-cols-2 gap-4 text-base">
                <div className="font-medium">Calories Consumed:</div>
                <div className="text-right font-bold">
                  {caloriesConsumed} cal
                </div>
                <div className="font-medium">Calories Burned:</div>
                <div className="text-right font-bold">{caloriesBurned} cal</div>
                <div className="col-span-2 h-px bg-white/50 my-2"></div>
                <div className="font-medium">Net Calories:</div>
                <div
                  className={`text-right font-bold ${
                    caloriesDifference > 0 ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {caloriesDifference > 0 ? '+' : ''}
                  {caloriesDifference} cal
                </div>
              </div>
              <div className="text-base mt-6 text-gray-700">
                {caloriesDifference > 0
                  ? `You have a calorie surplus of ${caloriesDifference} calories`
                  : caloriesDifference < 0
                  ? `You have a calorie deficit of ${Math.abs(
                      caloriesDifference
                    )} calories`
                  : 'Your calories are balanced'}
              </div>
            </div>
          </div>

          <ActivityList activities={state.activities} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default App;
