import { Edit, Trash2 } from 'lucide-react';
import { Activity } from '../interfaces';

interface Props {
  activities: Activity[];
}

export const ActivityList = ({ activities }: Props) => {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-[#E95A6C]">Activity Log</h2>
      <div className="flex-grow overflow-y-auto pr-2">
        {activities.length === 0 ? (
          <div className="text-center py-8 text-gray-500 text-base">
            No activities added yet. Add your first activity to start tracking!
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
                      activity.category === 1
                        ? 'bg-[#E95A6C] text-white'
                        : 'bg-[#F5B78A] text-white'
                    }`}
                  >
                    {activity.category === 1 ? 'Food' : 'Exercise'}
                  </span>
                  <div>
                    <div className="font-medium text-base">{activity.name}</div>
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
    </section>
  );
};
