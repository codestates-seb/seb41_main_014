import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
} from '@mui/material';
import { getLOCALE_MONEY } from '../helper/unitHelper';
import { useState } from 'react';
import axios from 'axios';

const GoalCreate = () => {
  const [search, setSearch] = useState('');
  const [wishs, setWishes] = useState([]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
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
    })
      .then((response) => {
        console.log(response.data.items);
        // console.log(setWishes);
        setWishes(response.data.items);
        console.log(search);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /* 
NaverAPI data
brand: ""
category1: "패션의류"
category2: "여성의류"
category3: "원피스"
category4: ""
hprice: ""
image: "https://shopping-phinf.pstatic.net/main_3326815/33268151232.20220704083440.jpg"
link: "https://search.shopping.naver.com/gate.nhn?id=33268151232"
lprice: "27400"
maker: ""
mallName: "네이버"
productId: "33268151232"
productType: "1"
title: "웬디즈갤러리 조안나 워싱 프릴 원피스 FOP<b>123</b>"
*/
  return (
    <Container>
      <Input onChange={handleSearchInput} />
      <Button onClick={handleSearch}>api</Button>
      <ImageList sx={{ width: 500, height: 450 }}>
        {wishs.length === 0 ? (
          <p>없어</p>
        ) : (
          wishs.map((wish) => (
            <ImageListItem key={wish.image}>
              <img
                src={`${wish.image}?w=248&fit=crop&auto=format`}
                srcSet={`${wish.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={search}
                loading="lazy"
              />
              <ImageListItemBar
                title={search}
                subtitle={<span>by: {getLOCALE_MONEY(wish.lprice)}</span>}
                position="below"
              />
            </ImageListItem>
          ))
        )}
      </ImageList>
    </Container>
  );
};

export default GoalCreate;
