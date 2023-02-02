import { Box, Grid, styled, Typography, Link, Stack } from '@mui/material';
import moas from '../asset/images/logo_name.png';
import codestates from '../asset/images/logo_codestates.png';
import start from '../asset/images/footer_start_man.svg';
import github from '../asset/images/logo_github.png';
import PropTypes from 'prop-types';

const StyeldFooter = styled(Stack)(() => ({
  width: '100vw',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledGithub = ({ herf, imgSrc, personInCharge, name }) => {
  return (
    <Link
      href={herf}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      underline="none"
    >
      <img
        src={imgSrc}
        alt="github"
        style={{ width: '40px', borderRadius: '50%', padding: '4px' }}
      />
      <Box>
        <Typography variant="h2">{personInCharge}</Typography>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
          }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};

StyledGithub.propTypes = {
  herf: PropTypes.string,
  imgSrc: PropTypes.string,
  personInCharge: PropTypes.string,
  name: PropTypes.string,
};

const Footer = () => {
  return (
    <StyeldFooter>
      <Stack
        sx={(theme) => ({
          minWidth: '360px',
          width: '100%',
          backgroundColor: theme.colors.mainLight,
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Typography
          variant="h1"
          sx={{
            pt: 20,
            textAlign: 'center',
          }}
        >
          첫 월급을 계획적으로 저축하여 꿈을 이루세요
        </Typography>
        <img
          src={moas}
          alt="moas"
          style={{ height: '80px', paddingBottom: '32px' }}
        />
        <img src={codestates} alt="codestates" style={{ height: '60px' }} />
        <img src={start} alt="start" style={{ width: '300px' }} />
      </Stack>
      <Stack
        sx={() => ({
          minWidth: '360px',
          maxWidth: '600px',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <Link
          href="https://github.com/codestates-seb/seb41_main_014"
          underline="none"
        >
          <Typography variant="h3" sx={{ p: 4 }}>
            💰 About MOAS
          </Typography>
          <Typography variant="h4" sx={{ p: 4 }}>
            지금은 고금리 시대! 저축 목표 달성을 일사천리로 도와주는 웹서비스
          </Typography>
        </Link>
        <Grid container sx={{ p: 4 }}>
          <Grid item xs={4}>
            <StyledGithub
              herf={'https://github.com/iltae'}
              imgSrc={'https://avatars.githubusercontent.com/u/106229016?v=4'}
              personInCharge={'계정'}
              name={'김일태'}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <StyledGithub
              herf={'https://github.com/fairytale779'}
              imgSrc={'https://avatars.githubusercontent.com/u/109756791?v=4'}
              personInCharge={'목표'}
              name={'홍동화'}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <StyledGithub
              herf={'https://github.com/kimtank'}
              imgSrc={'https://avatars.githubusercontent.com/u/38494733?v=4'}
              personInCharge={'적금'}
              name={'김태윤'}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <StyledGithub
              herf={'https://github.com/ppk150'}
              imgSrc={github}
              personInCharge={'계정'}
              name={'표세웅'}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <StyledGithub
              herf={'https://github.com/YuKyung-Chung'}
              imgSrc={'https://avatars.githubusercontent.com/u/83561356?v=4'}
              personInCharge={'목표'}
              name={'정유경'}
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <StyledGithub
              herf={'https://github.com/gahyeonn'}
              imgSrc={'https://avatars.githubusercontent.com/u/90605255?v=4'}
              personInCharge={'적금'}
              name={'박가현'}
            />
          </Grid>
        </Grid>
        <Box>
          <Typography variant="h2" padding={1}>
            The MIT License
          </Typography>
          <Typography variant="h3" padding={1}>
            {`Copyright (c) 2023 MOAS`}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2"></Typography>
          <Typography variant="h3"></Typography>
        </Box>
      </Stack>
    </StyeldFooter>
  );
};

export default Footer;
