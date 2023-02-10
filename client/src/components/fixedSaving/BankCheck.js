import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBankCheckeds,
  setBankSelectedValue,
  setBankSelectedValueInit,
} from '../../reducer/savingConditionsSlice';

const BankCheck = () => {
  const banks = useSelector((state) => state.savingConditions.origin.banks);
  const dispatch = useDispatch();

  const handleCheckedAll = (event) => {
    const newChecks = [...banks.isCheckeds];
    for (let index = 0; index < banks.isCheckeds.length; index++) {
      newChecks[index] = event.target.checked;
    }
    dispatch(setBankCheckeds(newChecks));
    if (event.target.checked)
      dispatch(setBankSelectedValue(banks.isCheckeds.length));
    else dispatch(setBankSelectedValueInit());
  };

  const handleCheckedItem = (event, index) => {
    const newChecks = [...banks.isCheckeds];
    newChecks[index] = event.target.checked;
    dispatch(setBankCheckeds(newChecks));
    let selectedCount = 0;
    for (const el of banks.isCheckeds) if (el) selectedCount++;
    dispatch(setBankSelectedValue(selectedCount));
  };

  //TODO indeterminate 구현안됨 ㅜㅜ https://mui.com/material-ui/react-checkbox/
  const handleCheckedConfirm = (checkeds, n = 0) => {
    if (n - 1 === checkeds.length) return true;
    for (let i = n; i < checkeds.length; i++) {
      const el = checkeds[i];
      for (let j = n + 1; j < checkeds.length; j++) {
        const innerEl = checkeds[j];
        if (el && el !== innerEl) return false;
        if (!el && el !== innerEl) return false;
        if (!el && el === innerEl) return false;
      }
    }
    return handleCheckedConfirm(checkeds, n + 1);
  };

  return (
    <FormControl sx={{ margin: 3 }}>
      <h3>{banks.fixed.title}</h3>
      <FormGroup>
        <FormControlLabel
          key={-1}
          control={
            <Checkbox
              checked={handleCheckedConfirm(banks.isCheckeds)}
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
          {banks.fixed.data.map((button, index) => (
            <Grid item xs={3} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={banks.isCheckeds[index]}
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

export default BankCheck;
