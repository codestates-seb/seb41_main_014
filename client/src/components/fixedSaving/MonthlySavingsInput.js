import { Box, Input, styled, Typography } from '@mui/material';
import { rowCenter } from '../../styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFinishSavings,
  setMonthlySavings,
} from '../../reducer/savingConditions';
import { getLOCALE_MONEY } from '../../helper/unitHelper';

const StyledRow = styled(Box)`
  ${rowCenter}
  align-items: center;
`;

const StyledColorRow = styled(StyledRow)`
  background: #eef1ff;
  border-bottom: 4px solid #aac4ff;
  border-radius: 4px;
`;

const MonthlySavingsInput = () => {
  const data = useSelector((state) => state.savingConditions.monthlySavings);
  const saveTrm = useSelector((state) => state.savingConditions.saveTrm);
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    dispatch(setMonthlySavings(Number(event.target.value)));
    dispatch(
      setFinishSavings(getLOCALE_MONEY(event.target.value * saveTrm.value))
    );
  };

  return (
    <Box sx={{ margin: 3, width: '40%' }}>
      <h3>{data.fixed.title}</h3>
      <StyledColorRow sx={{ marginTop: 1 }}>
        <Input
          disableUnderline
          sx={{ input: { textAlign: 'end' } }}
          value={data.value}
          type="number"
          onChange={handleOnChange}
          inputRef={(input) => input && input.focus()}
        />
        <span style={{ padding: '4px' }}>{data.fixed.unit}</span>
      </StyledColorRow>
      <StyledRow sx={{ justifyContent: 'right', pt: 2 }}>
        <Typography>{getLOCALE_MONEY(data.value)}</Typography>
        <span style={{ padding: '4px', marginRight: '13px' }}>
          {data.fixed.unit}
        </span>
      </StyledRow>
    </Box>
  );
};

export default MonthlySavingsInput;
