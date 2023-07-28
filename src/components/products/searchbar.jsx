import { useMemo, useState } from 'react';
import { PropTypes } from 'prop-types';
import { CircularProgress, InputAdornment, TextField, debounce, styled } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

function Searchbar({ filterItems }) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
    setLoading(true);
    debouncedItemsUpdate(event.target.value);
  };

  const debouncedItemsUpdate = useMemo(
    () =>
      debounce((args) => {
        filterItems(args);
        setLoading(false);
      }, 600),
    [filterItems]
  );
  return (
    <StyledTextField
      placeholder="Search by title"
      variant="outlined"
      value={value}
      onChange={handleChange}
      type="search"
      InputProps={{
        startAdornment: <InputAdornment position="end">{<SearchOutlined />}</InputAdornment>,
        endAdornment: <InputAdornment position="end">{loading && <CircularProgress size={'1rem'} />}</InputAdornment>
      }}
    />
  );
}

export default Searchbar;

Searchbar.propTypes = {
  filterItems: PropTypes.func
};

const StyledTextField = styled(TextField)(() => ({
  width: '16rem',
  'MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#EEEEEE'
  },
  '.MuiOutlinedInput-notchedOutline': {
    borderRadius: '10px',
    borderColor: '#EEEEEE'
  },
  '.MuiInputBase-input': {
    padding: '0.625rem 0.25rem'
  },
  '.MuiInputAdornment-root': {
    margin: 0
  }
}));
