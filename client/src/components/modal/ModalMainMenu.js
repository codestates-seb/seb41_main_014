import { Stack, Typography } from '@mui/material';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setModalClose } from '../../reducer/modaSlice';
import {
  ROUTE_PATH_BASE,
  ROUTE_PATH_FIXED_SAVING,
  ROUTE_PATH_GOAL_CREATE,
  ROUTE_PATH_GOAL_DETAIL,
  ROUTE_PATH_GOAL_EDIT,
  ROUTE_PATH_GOAL_LIST,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_MEMBER,
} from '../../store/routerStore';

const ModalMainMenu = forwardRef((props, ref) => {
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
    </Stack>
  );
});

ModalMainMenu.displayName = 'ModalMainMenu';

export default ModalMainMenu;
