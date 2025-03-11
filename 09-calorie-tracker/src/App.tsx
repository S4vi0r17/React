import { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Header } from './components/Header';
import { Form } from './components/Form';

type Activity = {
  id: string;
  type: 'food' | 'exercise';
  name: string;
  calories: number;
};

const App = () => {
  const [activities,] = useState<Activity[]>([]);

  //   const caloriesConsumed = activities
  //     .filter((activity) => activity.type === 'food')
  //     .reduce((sum, activity) => sum + activity.calories, 0);

  //   const caloriesBurned = activities
  //     .filter((activity) => activity.type === 'exercise')
  //     .reduce((sum, activity) => sum + activity.calories, 0);

  //   const caloriesDifference = caloriesConsumed - caloriesBurned;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E1A4] to-[#F5B78A] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header handleReset={() => {}} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Form />

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-[#E95A6C]">Summary</h2>
            <div className="bg-gradient-to-br from-[#F5E1A4] to-[#F5B78A] p-6 rounded-xl">
              <div className="grid grid-cols-2 gap-4 text-base">
                <div className="font-medium">Calories Consumed:</div>
                <div className="text-right font-bold">
                  {/* {caloriesConsumed} cal */}
                  2000 cal
                </div>
                <div className="font-medium">Calories Burned:</div>
                {/* <div className="text-right font-bold">{caloriesBurned} cal</div> */}
                <div className="text-right font-bold">100 cal</div>
                <div className="col-span-2 h-px bg-white/50 my-2"></div>
                <div className="font-medium">Net Calories:</div>
                {/* <div
                  className={`text-right font-bold ${
                    caloriesDifference > 0 ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {caloriesDifference > 0 ? '+' : ''}
                  {caloriesDifference} cal
                </div> */}
              </div>
              <div className="text-base mt-6 text-gray-700">
                {/* {caloriesDifference > 0
                  ? `You have a calorie surplus of ${caloriesDifference} calories`
                  : caloriesDifference < 0
                  ? `You have a calorie deficit of ${Math.abs(
                      caloriesDifference
                    )} calories`
                  : 'Your calories are balanced'} */}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-6 text-[#E95A6C]">
              Activity Log
            </h2>
            <div className="flex-grow overflow-y-auto pr-2">
              {activities.length === 0 ? (
                <div className="text-center py-8 text-gray-500 text-base">
                  No activities added yet. Add your first activity to start
                  tracking!
                </div>
              ) : (
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`px-3 py-1 text-sm font-semibold rounded-full ${
                            activity.type === 'food'
                              ? 'bg-[#E95A6C] text-white'
                              : 'bg-[#F5B78A] text-white'
                          }`}
                        >
                          {activity.type === 'food' ? 'Food' : 'Exercise'}
                        </span>
                        <div>
                          <div className="font-medium text-base">
                            {activity.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {activity.calories} calories
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="text-gray-400 hover:text-[#E95A6C] transition-colors">
                          <Edit className="h-5 w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-[#E95A6C] transition-colors">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
