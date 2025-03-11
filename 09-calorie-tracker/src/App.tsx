import { useEffect, useReducer } from 'react';
import { activityReducer, initialState } from './reducers/activity.reducer';
import { Header, Form, CalorieSummary, ActivityList } from './components';

const App = () => {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E1A4] to-[#F5B78A] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Header activities={state.activities} dispatch={dispatch} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Form state={state} dispatch={dispatch} />

          <CalorieSummary activities={state.activities} />

          <ActivityList activities={state.activities} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
};

export default App;
