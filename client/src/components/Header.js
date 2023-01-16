import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  ROUTE_PATH_BASE,
  ROUTE_PATH_FIXED_SAVING,
  ROUTE_PATH_GOAL_LIST,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_MEMBER,
  ROUTE_PATH_SIGNUP,
} from '../store/routerStore';
import { row, rowCenter } from '../styles/theme';

const StyeldHeader = styled(Box)`
  ${rowCenter}
  width: 100vw;
  height: ${(props) => props.theme.spacing(15)};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
  justify-content: 'space-around';
  /* TODO */
  background-color: bisque;
  ul {
    ${row}
  }
`;

// 참고 : divUl 은 추후에 지울 겁니다. 편하게 보려고 해놓음
const Header = () => {
  return (
    <StyeldHeader as="header">
      <div>
        <p>비로그인</p>
        <ul>
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
      <div>
        <p>로그인</p>
        <ul>
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
