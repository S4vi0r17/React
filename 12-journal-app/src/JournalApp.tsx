import { BrowserRouter } from 'react-router';
import { AppTheme } from './theme';
import { AppRouter } from './router/AppRouter';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const JournalApp = () => {
  return (
    <BrowserRouter>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </BrowserRouter>
  );
};

export default JournalApp;
