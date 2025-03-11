import { useMemo } from 'react';
import { Activity } from '../interfaces';

interface Props {
  activities: Activity[];
}

export const CalorieSummary = ({ activities }: Props) => {
  const caloriesConsumed = useMemo(() => {
    return activities
      .filter((activity) => activity.category === 1)
      .reduce((sum, activity) => sum + Number(activity.calories), 0);
  }, [activities]);

  const caloriesBurned = useMemo(() => {
    return activities
      .filter((activity) => activity.category === 2)
      .reduce((sum, activity) => sum + Number(activity.calories), 0);
  }, [activities]);

  const caloriesDifference = caloriesConsumed - caloriesBurned;

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-[#E95A6C]">Summary</h2>
      <div className="bg-gradient-to-br from-[#F5E1A4] to-[#F5B78A] p-6 rounded-xl">
        <div className="grid grid-cols-2 gap-4 text-base">
          <div className="font-medium">Calories Consumed:</div>
          <div className="text-right font-bold">{caloriesConsumed} cal</div>
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
    </section>
  );
};
