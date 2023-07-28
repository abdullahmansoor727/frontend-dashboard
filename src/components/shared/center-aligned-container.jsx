import { Box, styled } from '@mui/material';

export const CenterAlignedContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 12rem)',
  width: '100%'
}));
