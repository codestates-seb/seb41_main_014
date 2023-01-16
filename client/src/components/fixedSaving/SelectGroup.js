import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SelectGroup = ({ title, buttons = [] }) => {
  const [val, setVal] = useState(buttons[0].value);
  const handleChange = (event, val) => {
    setVal(val);
  };

  return (
    <Box sx={{ margin: 3 }}>
      <h3>{title}</h3>
      <ToggleButtonGroup
        sx={() => ({
          pt: 2,
        })}
        size="medium"
        exclusive
        value={val}
        onChange={handleChange}
      >
        {buttons.map((button, index) => (
          <ToggleButton
            key={index}
            sx={(theme) => ({
              p: 1,
              borderBottom: `4px solid ${theme.colors.mainMiddle}`,
              color: theme.palette.text.secondary,
              backgroundColor: theme.colors.mainLight,
              '&.Mui-selected, &.Mui-selected:hover': {
                color: theme.colors.white,
                backgroundColor: theme.colors.mainMiddle,
              },
            })}
            value={button.value}
          >
            {button.title}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Box>
  );
};

SelectGroup.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.array.isRequired,
};

export default SelectGroup;
