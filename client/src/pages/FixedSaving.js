import { Box, Button, Divider, Grid, styled, Typography } from '@mui/material';
import { getFS_BANKS } from '../helper/fixedSavingHelper';
import InputTitleNubmer from '../components/fixedSaving/InputTitleNubmer';
import SelectGroup from '../components/fixedSaving/SelectGroup';
import BankCheck from '../components/fixedSaving/BankCheck';
import Notice from '../components/fixedSaving/Notice';
import FixedSavingContents from '../components/fixedSaving/FixedSavingContents';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import RestorePageTwoToneIcon from '@mui/icons-material/RestorePageTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

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

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 0;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.type === -1
      ? props.theme.colors.accent
      : props.type === 1001
      ? props.theme.colors.mainMiddleLight
      : props.theme.colors.mainMiddle};
  :hover {
    background-color: ${(props) =>
      props.type === -1
        ? props.theme.colors.accent
        : props.type === 1001
        ? props.theme.colors.mainMiddleLight
        : props.theme.colors.mainMiddle};
    opacity: 0.8;
  }
  :active {
    background-color: ${(props) =>
      props.type === -1
        ? props.theme.colors.accent
        : props.type === 1001
        ? props.theme.colors.mainMiddleLight
        : props.theme.colors.mainMiddle};
    opacity: 0.6;
  }
`;

const ChoiceButtonGroup = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <StyledButton type={-1}>
          <ArrowBackTwoToneIcon fontSize="large" />
        </StyledButton>
      </Grid>
      <Grid item xs={4}>
        <StyledButton type={1001}>
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

const FixedSaving = () => {
  const banks = getFS_BANKS();
  return (
    <>
      <Notice />
      <Divider />
      <InputTitleNubmer title="월 저축금액" unit="원" />
      <Divider />
      <SelectGroup
        title={'저축 희망 기간'}
        buttons={[
          { title: '6개월', value: 6 },
          { title: '12개월', value: 12 },
          { title: '24개월', value: 24 },
          { title: '36개월', value: 36 },
        ]}
      />
      <Divider />
      <InputTitleNubmer title="총 저축금액" unit="원" type="text" />
      <Divider />
      <SelectGroup
        title="적립방식"
        buttons={[
          { title: '전체', value: 255 },
          { title: '정액적립식', value: 256 },
          { title: '자유적립식', value: 257 },
        ]}
      />
      <Divider />
      <BankCheck title="주 거래은행" buttons={banks} />
      <Divider />
      <SelectGroup
        title={'이자계산방식'}
        buttons={[
          { title: '전체', value: 355 },
          { title: '단리', value: 356 },
          { title: '복리', value: 357 },
        ]}
      />
      <Divider />
      <Notice isWarning />
      <Divider />
      <FixedSavingContents />
      <UserSelected />
      <ChoiceButtonGroup />
    </>
  );
};

export default FixedSaving;
