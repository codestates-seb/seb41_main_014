import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const GridRow = ({ data, xs = 2, align = 'left' }) => {
  return (
    <Grid
      item
      xs={xs}
      sx={() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: align,
        pr: 1,
        pl: 1,
      })}
    >
      <Typography sx={(theme) => ({ p: 1, fontSize: theme.fontSizes.lg })}>
        {data}
      </Typography>
    </Grid>
  );
};

export default GridRow;

GridRow.propTypes = {
  data: PropTypes.string,
  xs: PropTypes.number,
  align: PropTypes.string,
};
