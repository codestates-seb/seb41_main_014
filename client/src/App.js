import { Route, Routes, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import {
  ROUTE_PATH_BASE,
  ROUTE_PATH_FIXED_SAVING,
  ROUTE_PATH_GOAL_CREATE,
  ROUTE_PATH_GOAL_DETAIL,
  ROUTE_PATH_GOAL_EDIT,
  ROUTE_PATH_GOAL_LIST,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_MEMBER,
  ROUTE_PATH_SIGNUP,
} from './store/routerStore';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Member from './pages/Member';
import GoalCreate from './pages/GoalCreate';
import GoalList from './pages/GoalList';
import GoalDetail from './pages/GoalDetail';
import GoalEdit from './pages/GoalEdit';
import FixedSaving from './pages/FixedSaving';

import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from '@mui/system';
import { column, columnCenter } from './styles/theme';
import { useEffect, useState } from 'react';

// TODO theme사용예시, theme의경우 typeScript ts, tsx설정안되면
// 단순 theme interface(명세)라 자동완성안되니 style/theme.js 참조
const StyledApp = styled(Container)`
  ${columnCenter};
  width: 100%;
  /* TODO */
  background-color: yellow;
`;

const ContentContainer = styled(Container)`
  ${column}
  max-width: 600px;
  width: 600px;
  min-width: 360px;
  /* TODO */
  background-color: beige;
`;

function App() {
  const [footerVisibility, setFooterVisibility] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setFooterVisibility(location.pathname === ROUTE_PATH_BASE);
  }, [location]);
  return (
    <StyledApp>
      <Header />
      <ContentContainer>
        <Routes>
          <Route path={ROUTE_PATH_BASE} element={<Main />} />
          <Route path={ROUTE_PATH_LOGIN} element={<Login />} />
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
