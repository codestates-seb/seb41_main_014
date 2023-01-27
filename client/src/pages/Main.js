import { Box, styled, Typography } from '@mui/material';
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
} from '../reducer/modaSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getACCESS_TOKEN } from '../helper/cookieHelper';
import {
  getURL_GOALS,
  getWITH_PARAMS,
  getWITH_TOKEN,
  URL_NAVER_SEARCH,
} from '../store/urlStore';

const StyledButton = styled(Button)`
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(1)};
`;

const Main = () => {
  const userInfo = useSelector((state) => state.isLogin.userInfo);
  console.log(userInfo);
  const goalCreate = () => {
    axios
      .post(
        getURL_GOALS(),
        {
          goalName: '감자',
          price: 10000,
          monthlyPayment: -1,
        },
        getWITH_TOKEN()
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const goalList = () => {
    axios
      .get(getURL_GOALS(), getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const goalEdit = () => {
    //예를들어 골아이디가 1
    const goalID = 1;
    axios
      .patch(
        getURL_GOALS(goalID),
        {
          goalName: '수정감자',
          price: 99990000,
          monthlyPayment: 11100,
        },
        getWITH_TOKEN()
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const goalDetail = () => {
    //예를들어 골아이디가 1
    const goalID = 1;
    axios
      .get(getURL_GOALS(goalID))
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const goalDelete = () => {
    //예를들어 골아이디가 1
    const goalID = 1;
    axios
      .delete(getURL_GOALS(goalID))
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const memberDel = () => {
    axios
      .delete(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/members',
        {
          email: userInfo.email,
          name: userInfo.name,
        },
        {
          headers: {
            Authorization: getACCESS_TOKEN(),
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openapi = () => {
    axios
      .get(
        URL_NAVER_SEARCH,
        getWITH_PARAMS({
          query: '만두',
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
  const fixedSaving = () => {
    axios
      .post(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/savings',
        {
          monthlySavings: 10000,
          saveTrm: 36,
          joinDeny: 3,
        } /*//TODO 참고 https://junglast.com/blog/http-ajax-withcredential
        쿼리파라메타가 아닌 경우, option -> params: {key:value} 추가*/,
        {
          headers: { withCredentials: true },
          params: {
            page: 1,
            size: 10,
          },
        }
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);

        //TODO 에러처리 error에서 넘어오는 정보확인하고 번호만 짤라서
        /*         let errorText;
        const { message } = error;
        const code = Number(message.slice(-3));
        switch (code) {
          case 400:
            errorText = 'Bad request';
            break;
          case 401:
            errorText = 'Unauthorized';
            break;
          case 403:
            errorText = 'Forbidden';
            break;
          case 404:
            errorText = 'Data not found';
            break;
          case 405:
            errorText = 'Method not allowed';
            break;
          case 415:
            errorText = 'Unsupported media type';
            break;
          case 429:
            errorText = 'Rate limit exceeded';
            break;
          case 500:
            errorText = 'Internal server error';
            break;
          case 502:
            errorText = 'Bad gateway';
            break;
          case 503:
            errorText = 'Service unavailable';
            break;
          case 504:
            errorText = 'Gateway timeout';
            break;
          default:
            errorText = error;
        }
        return alert(errorText); */
      });
  };

  const dispatch = useDispatch();
  return (
    <AnimateGroup play>
      <Box>
        <StyledButton variant="contained" onClick={memberDel}>
          회원삭제
        </StyledButton>
        <StyledButton variant="contained" onClick={goalCreate}>
          목표등록
        </StyledButton>
        <StyledButton variant="contained" onClick={openapi}>
          물품검색
        </StyledButton>
        <StyledButton variant="contained" onClick={goalList}>
          물품조회
        </StyledButton>
        <StyledButton variant="contained" onClick={goalDetail}>
          물품상세조회
        </StyledButton>
        <StyledButton variant="contained" onClick={goalEdit}>
          물품수정
        </StyledButton>
        <StyledButton variant="contained" onClick={goalDelete}>
          물품삭제
        </StyledButton>
        <StyledButton variant="contained" onClick={fixedSaving}>
          적금
        </StyledButton>
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(setModalType(MODAL_TYPE_SEARCH));
            dispatch(setModalOpen());
          }}
        ></Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            첫 월급부터 은퇴자금까지 당신을 위한 저축플래너
          </Typography>
        </Animate>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            className="animate__animated animate__fadeOutDown animate__slower animate__infinite"
            style={{ width: '20%' }}
            src={coin}
            alt="coin"
          />
          <Animate
            sequenceIndex={0}
            duration={1}
            delay={0.3}
            start={{ opacity: 0 }}
            end={{ opacity: 1 }}
          >
            <img
              className="animate__animated animate__headShake animate__fast	animate__infinite"
              style={{ height: '300px', padding: '24px' }}
              src={logo_main}
              alt="main logo"
            />
          </Animate>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Animate
          sequenceIndex={1}
          duration={1}
          delay={0.3}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
        >
          <img
            style={{ width: '60%', padding: '24px' }}
            src={cart}
            alt="cart with woman"
          />
        </Animate>
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
            당신이 원하는 목표가 있을 때
          </Typography>
        </Animate>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            계획적으로 저축하자
          </Typography>
        </Animate>
        <Animate
          sequenceIndex={2}
          duration={1}
          delay={0.3}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
        >
          <img
            style={{ height: '300px', padding: '24px' }}
            src={goal}
            alt="goal with woman"
          />
        </Animate>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Animate
          sequenceIndex={3}
          duration={1}
          delay={0.3}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
        >
          <img
            style={{ height: '300px', padding: '24px' }}
            src={plan}
            alt="plan with man"
          />
        </Animate>
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
    </AnimateGroup>
  );
};

export default Main;
