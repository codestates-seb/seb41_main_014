import { Route, Routes } from 'react-router-dom';
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
import { ColumnCenterContainer } from './styles/common';

// TODO theme사용예시, theme의경우 typeScript ts, tsx설정안되면
// 단순 theme interface(명세)라 자동완성안되니 style/theme.js 참조
const StyledApp = styled(ColumnCenterContainer)(({ theme }) => ({
  fontSize: theme.fontSizes.base,
  height: '100vh',
  /* TODO */
  backgroundColor: 'yellow',
}));

const ContentContainer = styled(ColumnCenterContainer)`
  width: ${(props) => props.theme.spacing(150)};
  /* TODO */
  background-color: aliceblue;
`;

function App() {
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
      <Footer />
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
