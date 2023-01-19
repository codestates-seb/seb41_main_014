import { Box, styled, Typography } from '@mui/material';
import { rowCenter, theme } from '../../styles/theme';
import { useSelector } from 'react-redux';

const StyledRow = styled(Box)`
  ${rowCenter}
  align-items: center;
`;

const StyledColorRow = styled(StyledRow)`
  background: #eef1ff;
  border-bottom: 4px solid #aac4ff;
  border-radius: 4px;
`;

const FinishSavings = () => {
  const data = useSelector((state) => state.savingConditions.finishSavings);

  return (
    <Box sx={{ margin: 3, width: '40%' }}>
      <h3>{data.fixed.title}</h3>
      <StyledColorRow sx={{ marginTop: 1, justifyContent: 'end' }}>
        <Typography textAlign="right">{data.value}</Typography>
        <span style={{ padding: theme.spacing(2) }}>{data.fixed.unit}</span>
      </StyledColorRow>
    </Box>
  );
};

export default FinishSavings;
