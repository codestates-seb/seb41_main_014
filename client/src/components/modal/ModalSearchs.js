import {
  Button,
  Divider,
  Grid,
  Input,
  Link,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModalClose } from '../../reducer/modaSlice';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { getLOCALE_MONEY } from '../../helper/unitHelper';
import axios from 'axios';
import { getWITH_PARAMS, URL_NAVER_SEARCH } from '../../store/urlStore';
import Pagination from '../libs/Pagenation';

const ModalSearchs = () => {
  const [query, setQuery] = useState('');
  const [start, setStart] = useState(1);
  const [searchs, setSearchs] = useState([]);
  const [total, setTotal] = useState(0);
  // display: size / start: page / sort: sim: 정확도, date: 날짜순
  const pageInfo = {
    display: 8,
    sort: 'sim',
  };

  useEffect(() => {
    axios
      .get(
        URL_NAVER_SEARCH,
        getWITH_PARAMS({
          query: query,
          start: start,
          ...pageInfo,
        })
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
        setSearchs(data.items);
        setTotal(data.total);
        console.log(total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [start]);

  //7~12는 필터링해야될듯.
  const productType = {
    1: '일반/가격비교 상품',
    2: '일반/가격비교 비매칭 일반상품',
    3: '일반/가격비교 매칭 일반 상품',
    4: '중고/가격비교 상품',
    5: '중고/가격 비교 비매칭 일반상품',
    6: '중고/가격비교 매칭 일반상품',
    7: '단종/가격비교 상품',
    8: '단종/가격비교 비매칭 일반상품',
    9: '단종/가격비교 매칭 일반상품',
    10: '판매예정/가격비교 상품',
    11: '판매예정/가격비교 비매칭 일반상품',
    12: '판매예정/가격비교 매칭 일반상품',
  };

  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchStart = () => {
    if (query === '') {
      alert('빈값');
      return;
    }
    axios
      .get(
        URL_NAVER_SEARCH,
        getWITH_PARAMS({
          query: query,
          start: start,
          ...pageInfo,
        })
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
        setSearchs(data.items);
        setTotal(data.total);
        setTotal(data.total);
        console.log(total);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCloseModal = () => {
    dispatch(setModalClose());
  };

  const handlePageChange = (buttonNumber) => {
    setStart(buttonNumber);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        minWidth: '360px',
        maxWidth: '600px',
        width: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        borderRadius: '12px',
        m: 4,
        p: 4,
      }}
    >
      <Typography variant="h2" textAlign="center">
        네이버 쇼핑 검색
      </Typography>
      <Divider />
      <Stack direction="row" justifyContent="end" spacing={2}>
        <Input
          value={query}
          onChange={handleSearchInput}
          inputRef={(input) => input && input.focus()}
          placeholder={'검색어를 입력하세요.'}
          sx={{ input: { textAlign: 'end' } }}
        />
        <Button
          onClick={handleSearchStart}
          variant="outlined"
          startIcon={<SearchTwoToneIcon />}
        >
          검색
        </Button>
      </Stack>
      {!searchs || !Array.isArray(searchs) || searchs.length === 0 ? (
        <Typography>불러올 정보가 없어요.</Typography>
      ) : (
        <Stack spacing={1} alignItems="center">
          <Grid container>
            {searchs.map((search) => (
              <Grid item key={search.productId} xs={3}>
                <Tooltip
                  title={
                    <Stack spacing={1}>
                      <Typography>
                        상품군: {productType[search.productType]}
                      </Typography>
                      <Typography>
                        {search.category1}/{search.category2}/{search.category3}
                        /{search.category4}
                      </Typography>
                      <Typography>판매처: {search.mallName}</Typography>
                      <Typography>브랜드: {search.brand}</Typography>
                      <Typography>제조사: {search.maker}</Typography>
                    </Stack>
                  }
                >
                  <Stack alignItems="center" spacing={2} p={2}>
                    <img src={search.image} alt={search.title} height={80} />
                    <Stack alignItems="end">
                      <Typography>
                        최저: {getLOCALE_MONEY(search.lprice)} 원
                      </Typography>
                      {search.hprice === 0 ? (
                        ''
                      ) : (
                        <Typography variant="h6">
                          최고: {getLOCALE_MONEY(search.hprice)} 원
                        </Typography>
                      )}
                    </Stack>
                    <Button endIcon={<InsertLinkIcon />} color="info">
                      <Link href={search.link} underline="none">
                        쇼핑가기
                      </Link>
                    </Button>
                  </Stack>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
          <Pagination
            activePage={start}
            itemsCountPerPage={pageInfo.display}
            totalItemsCount={total}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </Stack>
      )}
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="warning" onClick={handleCloseModal}>
          취소
        </Button>
        <Button variant="contained">선택</Button>
      </Stack>
    </Stack>
  );
};

export default ModalSearchs;
