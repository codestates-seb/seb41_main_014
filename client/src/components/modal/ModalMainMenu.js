import { Button, Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getERROR_TEXT } from '../../helper/axiosHelper';
import { getALIVE, setLogout } from '../../helper/cookieHelper';
import { setModalClose } from '../../reducer/modalSlice';
import {
  ROUTE_PATH_BASE,
  ROUTE_PATH_FIXED_SAVINGS,
  ROUTE_PATH_GOAL_LIST,
  ROUTE_PATH_INTEREST_FIXED_SAVINGS,
  ROUTE_PATH_LOGIN,
  ROUTE_PATH_MEMBER,
} from '../../store/routerStore';
import { getWITH_TOKEN, URL_MEMBER_LOGOUT } from '../../store/urlStore';

import useMediaQuery from '@mui/material/useMediaQuery';

const ModalMainMenu = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const enqueueSnackbar = useSnackbar();
  const matches = useMediaQuery('(min-width:450px)');
  const modal = useSelector((state) => state.modal);

  useEffect(() => {
    if (modal.open && matches) handleCloseModal();
  }, [matches]);

  const handleCloseModal = () => {
    dispatch(setModalClose());
  };

  const handleLogout = () => {
    axios
      .delete(URL_MEMBER_LOGOUT, getWITH_TOKEN())
      .then(() => {
        setLogout();
        handleCloseModal();
        navigate(ROUTE_PATH_BASE);
      })
      .catch((error) => {
        const { message } = error;
        enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
          variant: 'error',
        });
      });
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
          sx={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}
        >
          메인
        </Typography>
      </Link>
      {!getALIVE() ? (
        <Link
          to={ROUTE_PATH_LOGIN}
          style={{ textDecoration: 'none', padding: '24px' }}
          onClick={handleCloseModal}
        >
          <Typography
            sx={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}
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
              sx={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}
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
              sx={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}
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
              sx={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}
            >
              회원정보
            </Typography>
          </Link>
          <Button onClick={handleLogout}>
            <Typography
              sx={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}
            >
              로그아웃
            </Typography>
          </Button>
        </>
      )}
      <Link
        to={ROUTE_PATH_FIXED_SAVINGS}
        style={{ textDecoration: 'none', padding: '24px' }}
        onClick={handleCloseModal}
      >
        <Typography
          sx={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}
        >
          적금추천
        </Typography>
      </Link>
    </Stack>
  );
});

ModalMainMenu.displayName = 'ModalMainMenu';

export default ModalMainMenu;
