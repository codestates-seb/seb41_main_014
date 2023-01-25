import {
  Button,
  Divider,
  Grid,
  Input,
  Link,
  Pagination,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalClose } from '../../reducer/modaSlice';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { getLOCALE_MONEY } from '../../helper/unitHelper';
import axios from 'axios';
import { setSearchsPageInfo } from '../../reducer/searchsSlice';
import { getREFRESH_TOKEN } from '../../helper/cookieHelper';

const ModalSearchs = () => {
  const [query, setQuery] = useState('');
  const searchs = useSelector((state) => state.searchs);

  useEffect(() => {
    // axios
    //   .get('접속문', {
    //     withCredentials: true,
    //     params: {},
    //   })
    //   .then((response) => {
    //     const { data } = response;
    //     console.log(data);
    //   })
    //   .catch((error) => alert(error));
  }, [searchs.pageInfo.origin.start]);

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

  const searchsData = searchs.data.origin;

  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
  };
  const handleSearchStart = () => {
    console.log(getREFRESH_TOKEN());
    if (query === '') {
      alert('빈값');
      return;
    }
    axios
      .get(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080//api/search',
        {
          headers: {
            Authorization: getREFRESH_TOKEN(),
          },
          params: {
            query: query,
          },
        } /* ,  //TODO 참고 https://junglast.com/blog/http-ajax-withcredential
        쿼리파라메타가 아닌 경우, option -> params: {key:value} 추가
        { headers: { withCredentials: true } }*/
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);

        //TODO 에러처리 error에서 넘어오는 정보확인하고 번호만 짤라서
        /*         let errorText;
        const { message } = error;
        const code = Number(message.slice(-3));
        switch (code) {
          case 400:
            errorText = 'Bad request';
            break;
          case 401:
            errorText = 'Unauthorized';
            break;
          case 403:
            errorText = 'Forbidden';
            break;
          case 404:
            errorText = 'Data not found';
            break;
          case 405:
            errorText = 'Method not allowed';
            break;
          case 415:
            errorText = 'Unsupported media type';
            break;
          case 429:
            errorText = 'Rate limit exceeded';
            break;
          case 500:
            errorText = 'Internal server error';
            break;
          case 502:
            errorText = 'Bad gateway';
            break;
          case 503:
            errorText = 'Service unavailable';
            break;
          case 504:
            errorText = 'Gateway timeout';
            break;
          default:
            errorText = error;
        }
        return alert(errorText); */
      });
  };
  const handleCloseModal = () => {
    dispatch(setModalClose());
  };

  const handlePageChange = (buttonNumber) => {
    const newPageInfo = { ...searchs.pageInfo.origin, start: buttonNumber };
    dispatch(setSearchsPageInfo(newPageInfo));
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
      {!!searchsData &&
      Array.isArray(searchsData) &&
      searchsData.length === 0 ? (
        <Typography>불러올 정보가 없어요.</Typography>
      ) : (
        <Stack spacing={1} alignItems="center">
          <Grid container>
            {searchsData.map((search) => (
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
            activePage={searchs.pageInfo.origin.start}
            itemsCountPerPage={searchs.pageInfo.origin.display}
            totalItemsCount={10000}
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
