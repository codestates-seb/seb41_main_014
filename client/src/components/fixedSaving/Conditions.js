import { useDispatch, useSelector } from 'react-redux';
import BankCheck from './BankCheck';
import {
  Box,
  Divider,
  Input,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import {
  setFinishSavings,
  setIntrRateType,
  setMonthlySavings,
  setRsrvType,
  setSaveTrm,
} from '../../reducer/savingConditionsSlice';
import { getLOCALE_MONEY } from '../../helper/unitHelper';

const styleTextBox = {
  marginTop: 1,
  alignItems: 'center',
  justifyContent: 'end',
  background: '#eef1ff',
  borderBottom: '4px solid #aac4ff',
  borderRadius: '4px',
};

const styleToggleButton = (theme) => ({
  p: 1,
  '&.MuiToggleButton-root': {
    borderBottom: `4px solid ${theme.colors.mainMiddle}`,
    color: theme.palette.text.secondary,
    backgroundColor: theme.colors.mainLight,
  },
  '&.Mui-selected, &.Mui-selected:hover': {
    color: theme.colors.white,
    backgroundColor: theme.colors.mainMiddle,
  },
});

const Conditions = () => {
  const conditions = useSelector((state) => state.savingConditions);
  const monthlySavings = conditions.origin.monthlySavings;
  const saveTrm = conditions.origin.saveTrm;
  const finishSavings = conditions.origin.finishSavings;
  const rsrvType = conditions.origin.rsrvType;
  const intrRateType = conditions.origin.intrRateType;
  const dispatch = useDispatch();

  const handleOnChangeMonthlySavings = (event) => {
    dispatch(setMonthlySavings(Number(event.target.value)));
    dispatch(
      setFinishSavings(getLOCALE_MONEY(event.target.value * saveTrm.value))
    );
  };

  const handleChangeSaveTrm = (e, val) => {
    if (val === null) return;
    dispatch(setSaveTrm(val));
  };

  const handleChangeRsrvType = (e, val) => {
    if (val === null) return;
    dispatch(setRsrvType(val));
  };

  const handleChangeIntrRate = (e, val) => {
    if (val === null) return;
    dispatch(setIntrRateType(val));
  };

  const handleClickSaveTrm = () => {
    dispatch(
      setFinishSavings(getLOCALE_MONEY(monthlySavings.value * saveTrm.value))
    );
  };

  return (
    <>
      {/* MonthlySavings */}
      <Stack pt={3} width="40%">
        <h3>{monthlySavings.fixed.title}</h3>
        <Stack direction="row" sx={styleTextBox}>
          <Input
            disableUnderline
            sx={{ width: '100%', input: { textAlign: 'end' } }}
            value={monthlySavings.value}
            type="number"
            onChange={handleOnChangeMonthlySavings}
            inputRef={(input) => input && input.focus()}
          />
          <span style={{ padding: '4px' }}>{monthlySavings.fixed.unit}</span>
        </Stack>
        <Stack direction="row" sx={{ justifyContent: 'right', pt: 2 }}>
          <Typography>{getLOCALE_MONEY(monthlySavings.value)}</Typography>
          <span style={{ padding: '4px', marginRight: '13px' }}>
            {monthlySavings.fixed.unit}
          </span>
        </Stack>
      </Stack>
      <Divider />
      {/* saveTrm */}
      <Box sx={{ margin: 3 }}>
        <h3>{saveTrm.fixed.title}</h3>
        <ToggleButtonGroup
          sx={() => ({
            pt: 2,
          })}
          size="medium"
          exclusive
          value={saveTrm.value}
          onChange={handleChangeSaveTrm}
        >
          {saveTrm.fixed.data.map((button) => (
            <ToggleButton
              key={button.value}
              sx={(theme) => styleToggleButton(theme)}
              value={button.value}
              onClick={handleClickSaveTrm}
            >
              {button.title}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <Divider />
      {/* finishSavings */}
      <Stack p={3} width="40%">
        <h3>{finishSavings.fixed.title}</h3>
        <Stack direction="row" sx={styleTextBox}>
          <Typography textAlign="right" width="100%">
            {finishSavings.value}
          </Typography>
          <span style={{ padding: '4px' }}>{finishSavings.fixed.unit}</span>
        </Stack>
      </Stack>
      <Divider />
      {/* rsrvType */}
      <Box sx={{ margin: 3 }}>
        <h3>{rsrvType.fixed.title}</h3>
        <ToggleButtonGroup
          sx={() => ({
            pt: 2,
          })}
          size="medium"
          exclusive
          value={rsrvType.value}
          onChange={handleChangeRsrvType}
        >
          {rsrvType.fixed.data.map((button) => (
            <ToggleButton
              key={button.value}
              sx={(theme) => styleToggleButton(theme)}
              value={button.value}
            >
              {button.title}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <Divider />
      {/* BankCheck */}
      <BankCheck />
      <Divider />
      {/* intrRateType */}
      <Box sx={{ margin: 3 }}>
        <h3>{intrRateType.fixed.title}</h3>
        <ToggleButtonGroup
          sx={() => ({
            pt: 2,
          })}
          size="medium"
          exclusive
          value={intrRateType.value}
          onChange={handleChangeIntrRate}
        >
          {intrRateType.fixed.data.map((button) => (
            <ToggleButton
              key={button.value}
              sx={(theme) => styleToggleButton(theme)}
              value={button.value}
            >
              {button.title}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </>
  );
};

export default Conditions;
