import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const GridColumn = ({ data, xs = 2, column }) => {
  return (
    <Grid
      sx={() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 1,
        pb: 1,
      })}
      item
      xs={xs}
    >
      <Typography
        sx={(theme) => ({
          pl: data === column.joinDeny.headerName ? 4 : 1.6,
          pr: data === column.joinDeny.headerName ? 4 : 1.6,
          fontSize: theme.fontSizes.lg,
          fontWeight: theme.fontWeight.bold,
          textAlign: 'center',
        })}
      >
        {data}
      </Typography>
    </Grid>
  );
};

export default GridColumn;

GridColumn.propTypes = {
  data: PropTypes.string,
  xs: PropTypes.number,
  column: PropTypes.object,
};
