import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  ROUTE_PATH_BASE,
  ROUTE_PATH_FIXED_SAVING,
  ROUTE_PATH_GOAL_LIST,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_MEMBER,
  ROUTE_PATH_SIGNUP,
} from '../store/routerStore';
import { RowCenterContainer } from '../styles/common';

const StyeldHeader = styled(RowCenterContainer)(({ theme }) => ({
  width: '100vw',
  height: theme.spacing(15),
  /* TODO */
  backgroundColor: 'bisque',
}));
const StyeldHeader = styled.header`
  display: flex;
  flex-direction: row;
  background-color: yellow;
  height: 30px;
  font-size: large;
  justify-content: space-around;
  .divUl {
    //임시 ~~~~ 나중에 지우셈
    display: flex;
    flex-direction: row;
    margin-left: 12px;
    list-style: none;
  }
`;

// 참고 : divUl 은 추후에 지울 겁니다. 편하게 보려고 해놓음
const Header = () => {
  return (
    <StyeldHeader as="header">
      <div>
    <StyeldHeader>
      <div className="divUl">
        <p>비로그인</p>
        <ul className="divUl">
          <li>
            <Link to={ROUTE_PATH_BASE}>로고(메인)</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH_LOGIN}>로그인</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH_SIGNUP}>회원가입</Link>
          </li>
        </ul>
      </div>
      <div className="divUl">
        <p>로그인</p>
        <ul className="divUl">
          <li>
            <Link to={ROUTE_PATH_GOAL_LIST}>로고(희망목록)</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH_GOAL_LIST}>희망목록</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH_FIXED_SAVING}>적금</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH_MEMBER}>멤버</Link>
          </li>
        </ul>
      </div>
    </StyeldHeader>
  );
};

export default Header;
