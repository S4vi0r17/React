import { RotateCcw } from 'lucide-react';
import { ActivityActions } from '../reducers/activity.reducer';
import { useMemo } from 'react';
import { Activity } from '../interfaces';

interface Props {
  activities: Activity[];
  dispatch: React.Dispatch<ActivityActions>;
}

export const Header = ({ activities, dispatch }: Props) => {
  const handleReset = () => {
    dispatch({ type: 'reset-app' });
  };

  const canResetApp = useMemo(() => {
    return activities.length > 0;
  }, [activities]);

  return (
    <header className="bg-white rounded-2xl shadow-lg p-4 mb-8 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-[#E95A6C] rounded-full p-2 w-12 h-12 flex items-center justify-center">
          <img
            src={'/favicon.svg'}
            alt="Calorie Tracker Logo"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-2xl font-bold ml-4 text-[#E95A6C]">
          Calorie Tracker
        </h1>
      </div>
      <button
        onClick={handleReset}
        className={`py-2 px-4 rounded-full flex items-center text-sm transition -colors ${
          canResetApp
            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            : 'bg-gray-50 text-gray-400 cursor-not-allowed'
        }`}
        disabled={!canResetApp}
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Reset All Data
      </button>
    </header>
  );
};
