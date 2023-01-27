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
import {
  getURL_GOALS,
  getURL_SAVINGS_INTEREST,
  getWITH_PARAMS,
  getWITH_TOKEN,
  URL_MEMBER,
  URL_MEMBER_LOGOUT,
  URL_NAVER_SEARCH,
  URL_SAVINGS,
} from '../store/urlStore';

const StyledButton = styled(Button)`
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(1)};
`;

const Main = () => {
  const userInfo = useSelector((state) => state.isLogin.userInfo);
  const dispatch = useDispatch();

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
    const goalID = 79;
    axios
      .patch(
        getURL_GOALS(goalID),
        {
          goalName: '11111111한글날은좋아',
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
    const goalID = 79;
    axios
      .get(getURL_GOALS(goalID), getWITH_TOKEN())
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
    const goalID = 79;
    axios
      .delete(getURL_GOALS(goalID), getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const memberLogOut = () => {
    axios
      .delete(URL_MEMBER_LOGOUT, getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const memberDetail = () => {
    axios
      .get(URL_MEMBER, getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const memberEdit = () => {
    axios
      .patch(
        URL_MEMBER,
        {
          email: userInfo.email,
          name: userInfo.name,
          picture: userInfo.picture,
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
  const memberDel = () => {
    axios
      .delete(URL_MEMBER, getWITH_TOKEN())
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
      <Box>
        <StyledButton variant="contained" onClick={memberLogOut}>
          로그아웃
        </StyledButton>
        <StyledButton variant="contained" onClick={memberDetail}>
          회원정보상세
        </StyledButton>
        <StyledButton variant="contained" onClick={memberEdit}>
          회원정보수정
        </StyledButton>
        <StyledButton variant="contained" onClick={memberDel}>
          회원삭제
        </StyledButton>
      </Box>
      <Box>
        <StyledButton variant="contained" onClick={goalCreate}>
          목표등록
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
      </Box>
      <Box>
        <StyledButton variant="contained" onClick={openapi}>
          물품검색
        </StyledButton>
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
