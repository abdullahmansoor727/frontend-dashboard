import { PropTypes } from 'prop-types';
import { Box, Typography, styled } from '@mui/material';

function MessageContainer(props) {
  const { text, variant, icon } = props;
  return (
    <StyledContainer error={variant === 'error'}>
      {icon}
      <Typography variant="body2"> {text}</Typography>
    </StyledContainer>
  );
}

export default MessageContainer;

MessageContainer.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

const StyledContainer = styled(Box, { shouldForwardProp: (prop) => prop != 'error' })(({ theme, error }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
  color: error ? theme.palette.error.main : theme.palette.text
}));
