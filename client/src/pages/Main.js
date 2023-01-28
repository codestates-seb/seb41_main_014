import { Box, Stack, styled, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import cart from '../../src/asset/images/main_cart_woman.svg';
import goal from '../../src/asset/images/main_goal_woman.svg';
import plan from '../../src/asset/images/main_plan_man.svg';
import logo_main from '../../src/asset/images/logo_main.png';
import coin from '../../src/asset/images/main_coin.svg';
import { Animate, AnimateGroup } from 'react-simple-animate';
import 'animate.css';
import {
  MODAL_TYPE_SEARCH,
  setModalOpen,
  setModalType,
} from '../reducer/modalSlice';
import { useDispatch } from 'react-redux';
import {
  getURL_SAVINGS_INTEREST,
  getWITH_PARAMS,
  getWITH_TOKEN,
  URL_SAVINGS,
} from '../store/urlStore';

const StyledButton = styled(Button)`
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(1)};
`;

const Main = () => {
  const dispatch = useDispatch();

  const fixedSaving = () => {
    axios
      .post(
        URL_SAVINGS,
        {
          monthlySavings: 10000,
          saveTrm: 36,
          joinDeny: 3,
        },
        getWITH_PARAMS({
          page: 1,
          size: 10,
        })
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fixedSavingCreate = () => {
    axios
      .post(getURL_SAVINGS_INTEREST(), {
        finPrdtCd: 'WR0001L',
        intrRateType: 'S',
        rsrvType: 'S',
        saveTrm: '12',
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fixedSavingList = () => {
    axios
      .get(getURL_SAVINGS_INTEREST(), getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fixedSavingDelete = () => {
    //관심목록 ID
    const interestID = 1;
    axios
      .delete(getURL_SAVINGS_INTEREST(interestID), getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AnimateGroup play>
      <Stack sx={{ maxWidth: 600, minWidth: 360, width: '100%' }}>
        <Box>
          <Button
            variant="outlined"
            onClick={() => {
              dispatch(setModalType(MODAL_TYPE_SEARCH));
              dispatch(setModalOpen());
            }}
          >
            네이버검색모달
          </Button>
          <StyledButton variant="contained" onClick={fixedSaving}>
            적금추천
          </StyledButton>
          <StyledButton variant="contained" onClick={fixedSavingList}>
            관심적금목록
          </StyledButton>
          <StyledButton variant="contained" onClick={fixedSavingCreate}>
            관심적금등록
          </StyledButton>
          <StyledButton variant="contained" onClick={fixedSavingDelete}>
            관심적금삭제
          </StyledButton>
        </Box>
        <Stack direction="row" alignItems="center">
          <Box width="30%">
            <Animate
              sequenceIndex={0}
              duration={1}
              delay={0.3}
              start={{ transform: 'translate(-300px, 0)', opacity: 0 }}
              end={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <Typography
                variant="h3"
                sx={(theme) => ({
                  fontWeight: theme.fontWeight.bold,
                })}
              >
                첫 월급부터 은퇴자금까지 당신을 위한 저축
              </Typography>
            </Animate>
          </Box>
          <Stack width="70%" alignItems="center" justifyContent="center">
            <img
              className="animate__animated animate__fadeOutDown animate__slower animate__infinite"
              style={{ width: '25%', paddingLeft: '25%' }}
              src={coin}
              alt="coin"
            />
            <Animate
              sequenceIndex={0}
              duration={1}
              delay={0.3}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
              style={{ alignItems: 'center' }}
            >
              <img
                className="animate__animated animate__headShake animate__fast	animate__infinite"
                style={{
                  width: '100%',
                  padding: '24px',
                  margin: 'auto',
                  display: 'block',
                }}
                src={logo_main}
                alt="main logo"
              />
            </Animate>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box width="65%">
            <Animate
              sequenceIndex={1}
              duration={1}
              delay={0.3}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
            >
              <img
                style={{
                  width: '100%',
                  padding: '24px',
                  margin: 'auto',
                  display: 'block',
                }}
                src={cart}
                alt="cart with woman"
              />
            </Animate>
          </Box>
          <Box width="35%">
            <Animate
              sequenceIndex={1}
              duration={1}
              delay={0.3}
              start={{ transform: 'translate(300px, 0)', opacity: 0 }}
              end={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <Typography
                variant="h3"
                sx={(theme) => ({
                  fontWeight: theme.fontWeight.bold,
                })}
              >
                FLEX 해버릴 당신이 원하는 희망을 등록하자
              </Typography>
            </Animate>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box width="35%">
            <Animate
              sequenceIndex={2}
              duration={1}
              delay={0.3}
              start={{ transform: 'translate(-300px, 0)', opacity: 0 }}
              end={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <Typography
                variant="h3"
                sx={(theme) => ({
                  fontWeight: theme.fontWeight.bold,
                })}
              >
                저축도 계획적으로 하자
              </Typography>
            </Animate>
          </Box>
          <Box width="65%">
            <Animate
              sequenceIndex={2}
              duration={1}
              delay={0.3}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
            >
              <img
                style={{
                  width: '100%',
                  padding: '24px',
                  margin: 'auto',
                  display: 'block',
                }}
                src={goal}
                alt="goal with woman"
              />
            </Animate>
          </Box>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box width="60%">
            <Animate
              sequenceIndex={3}
              duration={1}
              delay={0.3}
              start={{ opacity: 0 }}
              end={{ opacity: 1 }}
            >
              <img
                style={{
                  width: '80%',
                  padding: '24px',
                  margin: 'auto',
                  display: 'block',
                }}
                src={plan}
                alt="plan with man"
              />
            </Animate>
          </Box>
          <Box width="40%">
            <Animate
              sequenceIndex={3}
              duration={1}
              delay={0.3}
              start={{ transform: 'translate(300px, 0)', opacity: 0 }}
              end={{ transform: 'translate(0px, 0px)', opacity: 1 }}
            >
              <Typography
                variant="h3"
                sx={(theme) => ({
                  fontWeight: theme.fontWeight.bold,
                })}
              >
                차곡차곡 쌓이는 저축
              </Typography>
            </Animate>
          </Box>
        </Stack>
      </Stack>
    </AnimateGroup>
  );
};

export default Main;
