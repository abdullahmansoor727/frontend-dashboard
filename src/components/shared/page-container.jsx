import { Box, styled } from '@mui/material';

export const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  paddingTop: '1.5rem',

  [theme.breakpoints.down('lg')]: {
    padding: '1rem'
  }
}));
