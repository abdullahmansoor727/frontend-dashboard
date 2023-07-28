import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';

const OfflineChecker = () => {
  useEffect(() => {
    const handleOnline = () => {
      enqueueSnackbar({ message: 'Back online!', variant: 'success' });
    };
    const handleOffline = () => {
      enqueueSnackbar({ message: 'You`re Offline! Please check you internet connection.', variant: 'error' });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
};

export default OfflineChecker;
