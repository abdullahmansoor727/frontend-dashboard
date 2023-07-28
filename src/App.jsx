import AppRouter from './router.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './config/theme.js';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { CssBaseline } from '@mui/material';
import OfflineChecker from './components/layout/offline-checker.jsx';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={1} anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
            <OfflineChecker />
            <CssBaseline />
            <AppRouter />
          </SnackbarProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
