import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {
  ROUTE_PATH_INTEREST_FIXED_SAVINGS,
  ROUTE_PATH_BASE,
  ROUTE_PATH_FIXED_SAVINGS,
  ROUTE_PATH_GOAL_LIST,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_MEMBER,
} from '../store/routerStore';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../asset/images/logo_main_light.png';
import moas from '../asset/images/logo_name.png';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { logout } from '../reducer/isLoginSlice';
import {
  MODAL_TYPE_MAIN_MENU,
  setModalOpen,
  setModalType,
} from '../reducer/modalSlice';
import axios from 'axios';
import { URL_MEMBER_LOGOUT, getWITH_TOKEN } from '../store/urlStore';
import {
  removeACCESS_TOKEN,
  removeREFRESH_TOKEN,
} from '../helper/cookieHelper';
import { useSnackbar } from 'notistack';
import { getERROR_TEXT } from '../helper/axiosHelper';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const styleMenuTypography = (theme) => {
  const style = {};
  style.color = theme.colors.mainHeavy;
  style.borderRadius = '2';
  return style;
};

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const member = 111;
  const memberLogout = 113;

  const handleCloseUserMenu = (type) => {
    setAnchorElUser(null);
    switch (type) {
      case member:
        navigate(ROUTE_PATH_MEMBER);
        break;
      case memberLogout:
        axios
          .delete(URL_MEMBER_LOGOUT, getWITH_TOKEN())
          .then(() => {
            //TODO
          })
          .catch((error) => {
            const { message } = error;
            enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
              variant: 'error',
            });
          });
        removeACCESS_TOKEN();
        removeREFRESH_TOKEN();
        dispatch(logout());
        navigate(ROUTE_PATH_BASE);
        dispatch(logout());
        navigate(ROUTE_PATH_BASE);
        break;
    }
  };
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
      <Toolbar
        sx={{
          maxWidth: 600,
          minWidth: 360,
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Link to={ROUTE_PATH_BASE}>
          <IconButton size="large">
            <img src={logo} alt="logo" style={{ height: '48px' }} />
            <img src={moas} alt="logo" style={{ height: '48px' }} />
          </IconButton>
        </Link>
        {isLogin.userInfo.id === -1 ? (
          <>
            <Link to={ROUTE_PATH_LOGIN} style={{ textDecoration: 'none' }}>
              {/* 비로그인시 */}
              <Typography
                variant="h2"
                sx={(theme) => styleMenuTypography(theme)}
              >
                로그인
              </Typography>
            </Link>
            <Link
              to={ROUTE_PATH_FIXED_SAVINGS}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h2"
                sx={(theme) => styleMenuTypography(theme)}
              >
                적금추천
              </Typography>
            </Link>
          </>
        ) : (
          <>
            {/* 로그인 시 */}
            <Link to={ROUTE_PATH_GOAL_LIST} style={{ textDecoration: 'none' }}>
              <Typography
                variant="h2"
                sx={(theme) => styleMenuTypography(theme)}
              >
                희망목록
              </Typography>
            </Link>
            <Link
              to={ROUTE_PATH_FIXED_SAVINGS}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h2"
                sx={(theme) => styleMenuTypography(theme)}
              >
                적금추천
              </Typography>
            </Link>
            <Link
              to={ROUTE_PATH_INTEREST_FIXED_SAVINGS}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h2"
                sx={(theme) => styleMenuTypography(theme)}
              >
                관심적금
              </Typography>
            </Link>
            <Box>
              <Tooltip title={isLogin.userInfo.name}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar
                      src={isLogin.userInfo.picture}
                      alt={isLogin.userInfo.name}
                    />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={() => handleCloseUserMenu(member)}>
                  회원정보
                </MenuItem>
                <MenuItem onClick={() => handleCloseUserMenu(memberLogout)}>
                  로그아웃
                </MenuItem>
              </Menu>
            </Box>
          </>
        )}
        <IconButton
          size="large"
          edge="start"
          onClick={() => {
            dispatch(setModalType(MODAL_TYPE_MAIN_MENU));
            dispatch(setModalOpen());
          }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
