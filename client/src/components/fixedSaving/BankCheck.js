import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

const BankCheck = ({ title, buttons }) => {
  const [checkeds, setCheckeds] = useState(buttons);

  const handleCheckedAll = (event) => {
    setCheckeds(() => {
      const newCheckeds = [...checkeds];
      for (let index = 0; index < newCheckeds.length; index++) {
        const el = newCheckeds[index];
        el.isChecked = event.target.checked;
      }
      return newCheckeds;
    });
  };

  const handleCheckedItem = (event, index) => {
    setCheckeds(() => {
      const newCheckeds = [...checkeds];
      newCheckeds[index].isChecked = event.target.checked;
      return newCheckeds;
    });
  };

  //TODO indeterminate 구현안됨 ㅜㅜ https://mui.com/material-ui/react-checkbox/
  const handleCheckedConfirm = (checkeds, n = 0) => {
    console.log(n);
    if (n - 1 === checkeds.length) return true;
    console.log(n);
    for (let i = n; i < checkeds.length; i++) {
      const el = checkeds[i];
      for (let j = n + 1; j < checkeds.length; j++) {
        const innerEl = checkeds[j];
        if (el.isChecked && el.isChecked !== innerEl.isChecked) return false;
        if (!el.isChecked && el.isChecked !== innerEl.isChecked) return false;
        if (!el.isChecked && el.isChecked === innerEl.isChecked) return false;
      }
    }
    return handleCheckedConfirm(checkeds, n + 1);
  };

  return (
    <FormControl sx={{ margin: 3 }}>
      <h3>{title}</h3>
      <FormGroup>
        <FormControlLabel
          key={-1}
          control={
            <Checkbox
              checked={handleCheckedConfirm(checkeds)}
              onChange={handleCheckedAll}
            />
          }
          label={
            <Typography sx={(theme) => ({ fontSize: theme.fontSizes.lg })}>
              전체
            </Typography>
          }
        />
        <Grid container sx={{ marginLeft: 3 }}>
          {buttons.map((button, index) => (
            <Grid item xs={3} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkeds[index].isChecked}
                    onChange={(event) => handleCheckedItem(event, index)}
                  />
                }
                label={
                  <Typography
                    sx={(theme) => ({
                      fontSize: theme.fontSizes.lg,
                      whiteSpace: 'pre-wrap',
                    })}
                  >
                    {button.korCoNm}
                  </Typography>
                }
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </FormControl>
  );
};

BankCheck.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.array.isRequired,
};

export default BankCheck;
