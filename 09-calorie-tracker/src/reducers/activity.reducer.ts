import { Activity } from '../interfaces';

export type ActivityActions =
  | { type: 'save-activity'; payload: { newActivity: Activity } }
  | { type: 'set-active-id'; payload: { id: Activity['id'] } }
  | { type: 'edit-activity'; payload: { updatedActivity: Activity } }
  | { type: 'delete-activity'; payload: { id: Activity['id'] } };

export interface ActivityState {
  activities: Activity[];
  activeId: Activity['id'];
}

export const initialState: ActivityState = {
  activities: [],
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
  return state;
};
