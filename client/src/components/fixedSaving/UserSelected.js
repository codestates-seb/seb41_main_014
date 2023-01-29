import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { geINTR_RATE_TYPE, getRSRV_TYPE } from '../../helper/fixedSavingHelper';
import { getLOCALE_MONEY } from '../../helper/unitHelper';

const TypographyStyle = (bold) => (theme) => ({
  pt: 2,
  pb: 2,
  textAlign: 'center',
  fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.medium,
});

const UserSelected = () => {
  const conditions = useSelector((state) => state.savingConditions.origin);
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.mainMiddle,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      })}
    >
      <Grid container>
        <Grid item xs={3}>
          <Typography sx={TypographyStyle(true)}>
            {conditions.monthlySavings.fixed.title}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={TypographyStyle(true)}>
            {conditions.finishSavings.fixed.title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle(true)}>
            {conditions.saveTrm.fixed.title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle(true)}>
            {conditions.rsrvType.fixed.title}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle(true)}>
            {conditions.intrRateType.fixed.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={(theme) => ({
          backgroundColor: theme.colors.mainLight,
        })}
      >
        <Grid item xs={3}>
          <Typography sx={TypographyStyle()}>
            {getLOCALE_MONEY(conditions.monthlySavings.value)} 원
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={TypographyStyle()}>
            {getLOCALE_MONEY(conditions.finishSavings.value)} 원
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle()}>
            {conditions.saveTrm.value} 개월
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle()}>
            {getRSRV_TYPE(conditions.rsrvType.value)}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle()}>
            {geINTR_RATE_TYPE(conditions.intrRateType.value)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserSelected;
