import { Activity } from '../interfaces';

export type ActivityActions =
  | { type: 'save-activity'; payload: { newActivity: Activity } }
  | { type: 'set-active-id'; payload: { id: Activity['id'] } }
  | { type: 'delete-activity'; payload: { id: Activity['id'] } }
  | { type: 'reset-app' };

export interface ActivityState {
  activities: Activity[];
  activeId: Activity['id'];
}

const localStorageActivities = (): Activity[] => {
  const activities = localStorage.getItem('activities');
  return activities ? JSON.parse(activities) : [];
};

export const initialState: ActivityState = {
  activities: localStorageActivities(),
  activeId: '',
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === 'save-activity') {
    // Update the activity if it already exists
    if (state.activeId) {
      const updatedActivities = state.activities.map((activity) =>
        activity.id === state.activeId ? action.payload.newActivity : activity
      );

      return {
        ...state,
        activities: updatedActivities,
        activeId: '',
      };
    }

    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }

  if (action.type === 'set-active-id') {
    // Logic

    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  if (action.type === 'delete-activity') {
    // Logic

    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id !== action.payload.id
      ),
    };
  }

  if (action.type === 'reset-app') {
    return {
      activities: [],
      activeId: '',
    };
  }

  return state;
};
