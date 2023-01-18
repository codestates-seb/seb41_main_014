import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import RestorePageTwoToneIcon from '@mui/icons-material/RestorePageTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Button, Grid, styled } from '@mui/material';

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 0;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.buttontype === -1
      ? props.theme.colors.accent
      : props.buttontype === 1001
      ? props.theme.colors.mainMiddleLight
      : props.theme.colors.mainMiddle};
  :hover {
    background-color: ${(props) =>
      props.buttontype === -1
        ? props.theme.colors.accent
        : props.buttontype === 1001
        ? props.theme.colors.mainMiddleLight
        : props.theme.colors.mainMiddle};
    opacity: 0.8;
  }
  :active {
    background-color: ${(props) =>
      props.buttontype === -1
        ? props.theme.colors.accent
        : props.buttontype === 1001
        ? props.theme.colors.mainMiddleLight
        : props.theme.colors.mainMiddle};
    opacity: 0.6;
  }
`;

const FixedSavingButtonGroup = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <StyledButton buttontype={-1}>
          <ArrowBackTwoToneIcon fontSize="large" />
        </StyledButton>
      </Grid>
      <Grid item xs={4}>
        <StyledButton buttontype={1001}>
          <RestorePageTwoToneIcon fontSize="large" />
        </StyledButton>
      </Grid>
      <Grid item xs={4}>
        <StyledButton>
          <SearchTwoToneIcon fontSize="large" />
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default FixedSavingButtonGroup;
