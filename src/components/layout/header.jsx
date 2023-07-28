import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material';

export default function Header() {
  return (
    <Box>
      <StyledAppBar component="nav" position="relative" elevation={0}>
        <Toolbar>
          <Container>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { sm: 'block' } }}>
              Frontend Dashboard
            </Typography>
          </Container>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto'
}));

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#fff',
  boxShadow: '0px 3px 6px rgba(171, 171, 171, 0.14)',

  '& .MuiTypography-root': {
    flexGrow: 1,
    color: '#225a75'
  }
}));
