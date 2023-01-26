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
  ROUTE_PATH_LOGINCALLBACK,
  ROUTE_PATH_MEMBER,
  ROUTE_PATH_NOT_FOUND,
} from './store/routerStore';
import Main from './pages/Main';
import Login from './pages/Login';
import LoginCallback from './pages/LoginCallback';
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
import { Container, Modal } from '@mui/material';
import NotFound from './pages/NotFound';
import ModalMainMenu from './components/modal/ModalMainMenu';
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_TYPE_MAIN_MENU, setModalClose } from './reducer/modaSlice';
import ModalSearchs from './components/modal/ModalSearchs';
import { Helmet } from 'react-helmet';

// TODO theme사용예시, theme의경우 typeScript ts, tsx설정안되면
// 단순 theme interface(명세)라 자동완성안되니 style/theme.js 참조
const StyledApp = styled(Container)`
  ${columnCenter};
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled(Container)`
  ${column}
  max-width: 600px;
  width: 600px;
  min-width: 360px;
  padding-top: 74px;
`;

function App() {
  const [footerVisibility, setFooterVisibility] = useState(false);
  const location = useLocation();
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    setFooterVisibility(location.pathname === ROUTE_PATH_BASE);
  }, [location]);

  return (
    <StyledApp>
      <Helmet>
        <meta charSet="utf-8" />
        <title>당신의 저축도우미 MOAS</title>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Helmet>
      <Header />
      <ContentContainer>
        <Routes>
          <Route path={ROUTE_PATH_BASE} element={<Main />} />

          <Route path={ROUTE_PATH_LOGIN} element={<Login />} />
          <Route path={ROUTE_PATH_LOGINCALLBACK} element={<LoginCallback />} />
          <Route path={ROUTE_PATH_MEMBER} element={<Member />} />

          <Route path={ROUTE_PATH_GOAL_CREATE} element={<GoalCreate />} />
          <Route path={ROUTE_PATH_GOAL_LIST} element={<GoalList />} />
          <Route path={ROUTE_PATH_GOAL_DETAIL} element={<GoalDetail />} />
          <Route path={ROUTE_PATH_GOAL_EDIT} element={<GoalEdit />} />

          <Route path={ROUTE_PATH_FIXED_SAVING} element={<FixedSaving />} />
          <Route path={ROUTE_PATH_NOT_FOUND} element={<NotFound />} />
        </Routes>
      </ContentContainer>
      {footerVisibility ? <Footer /> : ''}
      <Modal open={modal.open} onClose={() => dispatch(setModalClose())}>
        {modal.type === MODAL_TYPE_MAIN_MENU ? (
          <ModalMainMenu />
        ) : (
          <ModalSearchs />
        )}
      </Modal>
    </StyledApp>
  );
}

export default App;
