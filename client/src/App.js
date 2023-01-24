import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import {
  ROUTE_PATH_BASE,
  ROUTE_PATH_FIXED_SAVING,
  ROUTE_PATH_GOAL_CREATE,
  ROUTE_PATH_GOAL_DETAIL,
  ROUTE_PATH_GOAL_EDIT,
  ROUTE_PATH_GOAL_LIST,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_LOGINCALLBACK,
  ROUTE_PATH_MEMBER,
  ROUTE_PATH_SIGNUP,
} from './store/routerStore';
import Main from './pages/Main';
import Login from './pages/Login';
import LoginCallback from './pages/LoginCallback';
import Signup from './pages/Signup';
import Member from './pages/Member';
import GoalCreate from './pages/GoalCreate';
import GoalList from './pages/GoalList';
import GoalDetail from './pages/GoalDetail';
import GoalEdit from './pages/GoalEdit';
import FixedSaving from './pages/FixedSaving';

import Footer from './components/Footer';
import Header from './components/Header';
import { column, columnCenter } from './styles/theme';
import { useEffect, useState } from 'react';
import { Box, Container, Modal, Typography } from '@mui/material';

// TODO theme사용예시, theme의경우 typeScript ts, tsx설정안되면
// 단순 theme interface(명세)라 자동완성안되니 style/theme.js 참조
const StyledApp = styled(Container)`
  ${columnCenter};
  justify-content: center;
  align-items: center;
  /* TODO */
  /* background-color: yellow; */
`;

const ContentContainer = styled(Container)`
  ${column}
  max-width: 600px;
  width: 600px;
  min-width: 360px;
  padding-top: 74px;
`;

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [footerVisibility, setFooterVisibility] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setFooterVisibility(location.pathname === ROUTE_PATH_BASE);
  }, [location]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <StyledApp>
      <Header handleOpenModal={handleOpenModal} />
      <ContentContainer>
        <Routes>
          <Route path={ROUTE_PATH_BASE} element={<Main />} />
          <Route path={ROUTE_PATH_LOGIN} element={<Login />} />
          <Route path={ROUTE_PATH_LOGINCALLBACK} element={<LoginCallback />} />
          <Route path={ROUTE_PATH_SIGNUP} element={<Signup />} />
          <Route path={ROUTE_PATH_MEMBER} element={<Member />} />
          <Route path={ROUTE_PATH_GOAL_CREATE} element={<GoalCreate />} />
          <Route path={ROUTE_PATH_GOAL_LIST} element={<GoalList />} />
          <Route path={ROUTE_PATH_GOAL_DETAIL} element={<GoalDetail />} />
          <Route path={ROUTE_PATH_GOAL_EDIT} element={<GoalEdit />} />
          <Route path={ROUTE_PATH_FIXED_SAVING} element={<FixedSaving />} />
        </Routes>
      </ContentContainer>
      {footerVisibility ? <Footer /> : ''}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          opacity: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}
      >
        <Box>
          <Link
            to={ROUTE_PATH_BASE}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              메인
            </Typography>
          </Link>
          <Link
            to={ROUTE_PATH_LOGIN}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              로그인
            </Typography>
          </Link>
          <Link
            to={ROUTE_PATH_SIGNUP}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              회원가입
            </Typography>
          </Link>
          <Link
            to={ROUTE_PATH_MEMBER}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              멤버정보
            </Typography>
          </Link>
          <Link
            to={ROUTE_PATH_GOAL_CREATE}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              목표등록
            </Typography>
          </Link>
          <Link
            to={ROUTE_PATH_GOAL_LIST}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              희망목록
            </Typography>
          </Link>
          <Link
            to={ROUTE_PATH_GOAL_DETAIL}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              희망상세
            </Typography>
          </Link>
          <Link
            to={ROUTE_PATH_GOAL_EDIT}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              희망수정
            </Typography>
          </Link>
          <Link
            to={ROUTE_PATH_FIXED_SAVING}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              적금
            </Typography>
          </Link>
        </Box>
      </Modal>
    </StyledApp>
  );
}

export default App;

/* 
0. figma 글씨크기
1. 없어요 처리
2. typescript
3. 기능별
4. commonjs 사용여부
*/
