import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  ROUTE_PATH_BASE,
  ROUTE_PATH_FIXED_SAVING,
  ROUTE_PATH_GOAL_LIST,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_MEMBER,
  ROUTE_PATH_SIGNUP,
} from '../store/routerStore';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../asset/images/logo_main_light.png';
import moas from '../asset/images/logo_name.png';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ handleOpenModal }) => {
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        height: '60px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
        borderBottom: `4px solid ${theme.colors.mainHeavy}`,
      })}
    >
      <Toolbar sx={{ maxWidth: 600, minWidth: 360 }}>
        <IconButton size="large" edge="start" onClick={handleOpenModal}>
          <MenuIcon />
        </IconButton>

        <Link to={ROUTE_PATH_BASE}>
          <IconButton size="large">
            <img src={logo} alt="logo" style={{ height: '48px' }} />
            <img src={moas} alt="logo" style={{ height: '48px' }} />
          </IconButton>
        </Link>
        {isLogin.userInfo.id === -1 ? (
          <>
            {/* 비로그인시 */}
            <Typography variant="h2" sx={{ mr: 4 }}>
              <Link to={ROUTE_PATH_LOGIN} style={{ textDecoration: 'none' }}>
                로그인
              </Link>
            </Typography>
            <Typography variant="h2" sx={{ mr: 4 }}>
              <Link to={ROUTE_PATH_SIGNUP} style={{ textDecoration: 'none' }}>
                회원가입
              </Link>
            </Typography>
            {/* 로그인 시 */}
            <Typography
              variant="h2"
              sx={{ mr: 4 }}
              style={{ textDecoration: 'none' }}
            >
              <Link
                to={ROUTE_PATH_GOAL_LIST}
                style={{ textDecoration: 'none' }}
              >
                희망목록
              </Link>
            </Typography>
            <Typography variant="h2" sx={{ mr: 4 }}>
              <Link
                to={ROUTE_PATH_FIXED_SAVING}
                style={{ textDecoration: 'none' }}
              >
                적금
              </Link>
            </Typography>
            <Typography variant="h2" sx={{ mr: 4 }}>
              <Link to={ROUTE_PATH_MEMBER} style={{ textDecoration: 'none' }}>
                멤버
              </Link>
            </Typography>
          </>
        ) : (
          <>
            {/* 비로그인시 */}
            <Typography variant="h2" sx={{ mr: 4 }}>
              <Link to={ROUTE_PATH_LOGIN} style={{ textDecoration: 'none' }}>
                로그인
              </Link>
            </Typography>
            <Typography variant="h2" sx={{ mr: 4 }}>
              <Link to={ROUTE_PATH_SIGNUP} style={{ textDecoration: 'none' }}>
                회원가입
              </Link>
            </Typography>
            {/* 로그인 시 */}
            <Typography variant="h2" sx={{ mr: 4 }}>
              <Link
                to={ROUTE_PATH_GOAL_LIST}
                style={{ textDecoration: 'none' }}
              >
                희망목록
              </Link>
            </Typography>
            <Typography variant="h2" sx={{ mr: 4 }}>
              <Link
                to={ROUTE_PATH_FIXED_SAVING}
                style={{ textDecoration: 'none' }}
              >
                적금
              </Link>
            </Typography>
            <Typography variant="h2" sx={{ mr: 4 }}>
              <Link to={ROUTE_PATH_MEMBER} style={{ textDecoration: 'none' }}>
                멤버
              </Link>
            </Typography>
            ㅣ것
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  handleOpenModal: PropTypes.func,
};

export default Header;
