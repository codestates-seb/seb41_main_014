import { Box, Button, Input, List, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModalClose } from '../../reducer/modaSlice';

const ModalSearchs = () => {
  const [query, setQuery] = useState();
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };
  const handleSearchStart = () => {
    alert(query);
  };
  const handleCloseModal = () => {
    dispatch(setModalClose());
  };
  const els = [
    { title: 'a', p: 1111 },
    { title: 'b', p: 2222 },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        borderRadius: '4',
        p: 4,
      }}
    >
      <Typography variant="h2">물품 검색</Typography>
      <Box sx={{ display: 'flex' }}>
        <Input value={query} onChange={handleSearchInput} />
        <Button onClick={handleSearchStart}>검색</Button>
      </Box>
      <List>
        {els.length === 0 ? (
          <Typography>없음</Typography>
        ) : (
          els.map((el, index) => (
            <Box key={index}>
              <Typography>{el.title}</Typography>
              <Typography>{el.p}</Typography>
            </Box>
          ))
        )}
      </List>
      <Box sx={{ display: 'flex' }}>
        <Button onClick={handleCloseModal}>취소</Button>
        <Button>선택</Button>
      </Box>
    </Box>
  );
};

export default ModalSearchs;
