import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import CssBaseline from '@mui/material/CssBaseline';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppThemeProvider>
        <AppRoutes />
      </AppThemeProvider>
    </BrowserRouter>
  );
}

export default App;
