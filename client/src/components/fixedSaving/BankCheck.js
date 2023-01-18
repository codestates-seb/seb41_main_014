import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const BankCheck = ({ title, buttons }) => {
  const [checkeds, setCheckeds] = useState(buttons);

  useEffect(() => {
    console.log(checkeds);
  }, [checkeds]);

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

  const handleCheckedConfirm = (checkeds, n = 0) => {
    if (n - 1 === checkeds.length) return true;
    for (const el of checkeds) {
      if (checkeds[n].isChecked !== el.isChecked) return false;
    }
    return handleCheckedConfirm(ch);
  };

  const handleChecked = (event, index) => {
    setCheckeds(() => {
      const newCheckeds = [...checkeds];
      newCheckeds[index].isChecked = event.target.checked;
      return newCheckeds;
    });
  };

  return (
    <FormControl sx={{ margin: 3 }}>
      <h3>{title}</h3>
      <FormGroup>
        <FormControlLabel
          key={-1}
          control={<Checkbox onChange={handleCheckedAll} />}
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
                    onChange={(event) => handleChecked(event, index)}
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
