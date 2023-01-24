import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../reducer/isLoginSlice';
import { ROUTE_PATH_BASE } from '../store/routerStore';
import { Container, styled, Divider, Button } from '@mui/material';

const MemberContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 80vh;
  margin-top: 8px;
  background-color: ${(props) => props.theme.colors.mainLight};
  div {
    margin-top: 4px;
  }
  h2 {
    margin-top: 4px;
  }
  h3 {
    margin-top: 4px;
  }
  img {
    margin-top: 4px;
  }
`;

const InfoContainer = styled(Container)`
  text-align: center;
  font-size: 18px;
  flex: 1;
`;

const SummaryContainer = styled(Container)`
  text-align: left;
  font-size: 14px;
  div {
    background-color: ${(props) => props.theme.colors.mainMiddleLight};
    margin-top: 4px;
    width: 100%;
    height: 10vh;
  }
  h3 {
    margin-top: 4px;
  }
  flex: 2;
`;

const LogoutContainer = styled(Container)`
  display: flex;
  justify-content: end;
  flex: 0.05;
  margin-bottom: 4px;
`;

const MemberDivider = styled(Divider)`
  height: 1%;
  background-color: ${(props) => props.theme.colors.mainHeavy};
  margin-top: 4px;
`;

const LogoutButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
  width: 15%;
`;

const Member = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.isLogin.userInfo);

  const logoutHandler = () => {
    dispatch(logout());
    navigate(ROUTE_PATH_BASE);
  };

  return (
    <>
      <MemberContainer>
        <InfoContainer>
          <h3>MY PROFILE</h3>
          <img src={userInfo.picture} alt="유저프로필" />
          <h2>{userInfo.name}</h2>
          <div>{userInfo.email}</div>
        </InfoContainer>
        <MemberDivider />
        <SummaryContainer>
          <h3>MY WISHLIST</h3>
          <div></div>
        </SummaryContainer>
        <LogoutContainer>
          <LogoutButton onClick={logoutHandler}>LOGOUT</LogoutButton>
        </LogoutContainer>
      </MemberContainer>
    </>
  );
};

export default Member;
