import { Button, Container, Input } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const GoalCreate = () => {
  const [search, setSearch] = useState('');
  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    console.log(search);
    console.log(process.env.REACT_APP_NAVER_SEARCH_ENDPOINT);
    axios({
      method: 'get',
      url: process.env.REACT_APP_NAVER_SEARCH_ENDPOINT,
      headers: {
        'X-Naver-Client-Id': process.env.REACT_APP_NAVER_API_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_API_CLIENT_SECRET,
      },
      params: {
        query: search,
      },
      proxy: {
        protocol: 'https',
        host: 'openapi.naver.com',
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Input onChange={handleSearchInput} />
      <Button onClick={handleSearch}>api</Button>
    </Container>
  );
};

export default GoalCreate;
