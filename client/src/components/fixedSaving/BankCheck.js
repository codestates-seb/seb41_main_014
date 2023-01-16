import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';

const BankCheck = ({ title, buttons }) => {
  const theme = useTheme();
  return (
    <FormControl sx={{ margin: 3 }}>
      <h3>{title}</h3>
      <FormGroup>
        <FormControlLabel
          key={-1}
          control={<Checkbox defaultChecked />}
          label={
            <Typography sx={{ fontSize: theme.fontSizes.lg }}>전체</Typography>
          }
        />
        <Grid container sx={{ marginLeft: 3 }}>
          {buttons.map((button, index) => (
            <Grid item xs={3} key={index}>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography
                    sx={{
                      fontSize: theme.fontSizes.lg,
                      whiteSpace: 'pre-wrap',
                    }}
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
