import { useState } from 'react';
import { Plus } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import categories from '../data/index';
import { Activity } from '../interfaces';
import { ActivityActions } from '../reducers/activity.reducer';

interface Props {
  dispatch: React.Dispatch<ActivityActions>;
}

const initialState: Activity = {
  id: uuidv4(),
  category: 1,
  name: '',
  calories: '',
};

export const Form = ({ dispatch }: Props) => {
  const [activity, setActivity] = useState<Activity>(initialState);

  const handleChanges = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value, id } = e.target;

    // if (name === 'category' || name === 'calories') {
    //   setActivity({ ...activity, [name]: Number(value) });
    // } else {
    //   setActivity({ ...activity, [name]: value });
    // }

    const isNumber = ['activity-type', 'calories'].includes(id);

    setActivity({
      ...activity,
      [name]: isNumber ? Number(value) : value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;

    return name.trim() !== '' && Number(calories) > 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: 'save-activity',
      payload: { newActivity: activity },
    });

    setActivity({ ...initialState, id: uuidv4() });
  };

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-[#E95A6C]">Add Activity</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="activity-type"
              className="block text-sm font-medium text-gray-700"
            >
              Activity Type
            </label>
            <select
              id="activity-type"
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E95A6C] text-base transition-all"
              name="category"
              value={activity.category}
              onChange={handleChanges}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="activity-name"
              className="block text-sm font-medium text-gray-700"
            >
              Activity Name
            </label>
            <input
              id="activity-name"
              type="text"
              placeholder="Enter activity name"
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E95A6C] text-base transition-all"
              name="name"
              value={activity.name}
              onChange={handleChanges}
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="calories"
              className="block text-sm font-medium text-gray-700"
            >
              Calories
            </label>
            <input
              id="calories"
              type="number"
              placeholder="Enter calories"
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E95A6C] text-base transition-all"
              name="calories"
              value={activity.calories}
              onChange={handleChanges}
            />
          </div>
        </form>
      </div>
      <button
        className="w-full bg-[#E95A6C] text-white py-3 px-4 rounded-xl hover:bg-[#d44a5a] transition-all flex items-center justify-center text-base mt-6 disabled:opacity-70"
        disabled={!isValidActivity()}
        onClick={handleSubmit}
      >
        <Plus className="mr-2 h-5 w-5" />
        {/* {false ? 'Update Activity' : 'Add Activity'} */}
        {false
          ? 'Update Activity'
          : activity.category === 1
          ? 'Add Food'
          : 'Add Exercise'}
      </button>
    </section>
  );
};
