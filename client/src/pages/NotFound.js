import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import notFound from '../asset/images/not_found.svg';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={notFound} alt="not found" style={{ width: '300px' }} />
      <Typography
        sx={(theme) => ({
          fontSize: '3rem',
          fontWeight: theme.fontWeight.bold,
        })}
      >
        404
      </Typography>
      <Typography
        sx={(theme) => ({
          fontSize: '2.5rem',
          fontWeight: theme.fontWeight.bold,
        })}
      >
        해당하는 페이지가 없습니다
      </Typography>
      <Button sx={{ p: 4 }} onClick={() => navigate(-1)}>
        뒤로가기
      </Button>
    </Box>
  );
};

export default NotFound;
