import { Box, Grid, Typography } from '@mui/material';

const TypographyStyle = (bold) => (theme) => ({
  pt: 2,
  pb: 2,
  textAlign: 'center',
  fontWeight: bold ? theme.fontWeight.bold : theme.fontWeight.medium,
});

const UserSelected = () => {
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
          <Typography sx={TypographyStyle(true)}>월 저축금액</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle(true)}>기간</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle(true)}>적립방식</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={TypographyStyle(true)}>주 거래은행</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle(true)}>이자계산방식</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={(theme) => ({
          backgroundColor: theme.colors.mainLight,
        })}
      >
        <Grid item xs={3}>
          <Typography sx={TypographyStyle()}>1,000,000 원</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle()}>12 개월</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle()}>자유적립식</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography sx={TypographyStyle()}>신한은행 외 1</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={TypographyStyle()}>단리</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserSelected;
