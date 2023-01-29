import { Stack, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalClose } from '../../reducer/modalSlice';
import {
  ROUTE_PATH_BASE,
  ROUTE_PATH_FIXED_SAVINGS,
  ROUTE_PATH_GOAL_LIST,
  ROUTE_PATH_INTEREST_FIXED_SAVINGS,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_MEMBER,
} from '../../store/routerStore';

const ModalMainMenu = forwardRef((props, ref) => {
  const userInfo = useSelector((state) => state.isLogin.userInfo);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setModalClose());
  };
  return (
    <Stack
      {...props}
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        p: 4,
      }}
    >
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
      {userInfo.id === -1 ? (
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
      ) : (
        <>
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
            to={ROUTE_PATH_INTEREST_FIXED_SAVINGS}
            style={{ textDecoration: 'none', padding: '24px' }}
            onClick={handleCloseModal}
          >
            <Typography
              sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
            >
              관심적금
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
              회원정보
            </Typography>
          </Link>
        </>
      )}
      <Link
        to={ROUTE_PATH_FIXED_SAVINGS}
        style={{ textDecoration: 'none', padding: '24px' }}
        onClick={handleCloseModal}
      >
        <Typography
          sx={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}
        >
          적금추천
        </Typography>
      </Link>
    </Stack>
  );
});

ModalMainMenu.displayName = 'ModalMainMenu';

export default ModalMainMenu;
