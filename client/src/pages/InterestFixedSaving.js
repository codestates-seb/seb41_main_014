import Notice from '../components/fixedSaving/Notice';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  Link,
  List,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  getFS_BANKS,
  getFS_DATA,
  getJOIN_DENY,
} from '../helper/fixedSavingHelper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  getURL_SAVINGS_INTEREST,
  getWITH_PARAMS,
  getWITH_TOKEN,
  URL_SAVINGS,
} from '../store/urlStore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getLOCALE_MONEY, getPERCENT_WITH_TEXT } from '../helper/unitHelper';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSnackbar } from 'notistack';
import { getERROR_TEXT } from '../helper/axiosHelper';

const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const InterestFixedSaving = () => {
  const [interestSavings, setInterestSavings] = useState([]);
  const [pageInfo, setPageInfo] = useState({ page: 1, size: 10 });
  const [expandeds, setExpandeds] = useState([]);

  const fixedSavingStaticData = getFS_DATA();
  const { enqueueSnackbar } = useSnackbar();

  const getInterestSavings = (pageInfo, isInfiniteScroll = false) => {
    axios
      .post(
        URL_SAVINGS,
        {
          monthlySavings: 10000,
          saveTrm: 12,
          rsrvType: undefined,
          finCoNoList: [],
          intrRateType: undefined,
          joinDeny: undefined,
        },
        getWITH_PARAMS(pageInfo)
      )
      .then((response) => {
        const { data } = response;
        console.log(data.data);
        if (data.data.length === 0) {
          alert('succeed: No data');
          return;
        }
        // 데이터 세팅
        const originData = data.data;

        const banks = getFS_BANKS();
        for (const data of originData) {
          for (const bank of banks) {
            if (data.korCoNm === bank.korCoNm) {
              data.dcls_chrg_man = bank.dcls_chrg_man;
              data.homp_url = bank.homp_url;
              break;
            }
          }
        }
        const originPageInfo = data.pageInfo;
        originPageInfo.hasNext =
          originPageInfo.page < originPageInfo.totalPages;
        setPageInfo(data.pageInfo);
        setExpandeds(new Array(originData.length).fill(false));

        setInterestSavings(
          !isInfiniteScroll ? originData : interestSavings.concat(originData)
        );
        console.log(originData);
      })
      .catch((error) => {
        const { message } = error;
        enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
          variant: 'error',
        });
      });
  };
  useEffect(() => {
    //TODO 지금 불러오는값은 적금추천값 -> 추후 실서버 연동필요
    getInterestSavings(pageInfo);
  }, []);
  const banks = getFS_BANKS();
  const getImage = (interestSaving) => {
    for (const bank of banks) {
      if (interestSaving.korCoNm === bank.korCoNm) {
        return bank.image;
      }
    }
    return '';
  };
  const handleExpandClick = (idx) => {
    const head = expandeds.slice(0, idx);
    const tail = expandeds.slice(idx + 1);
    setExpandeds([...head, !expandeds[idx], ...tail]);
  };
  const handleDelete = (likeSavingId) => {
    axios
      .delete(getURL_SAVINGS_INTEREST(likeSavingId), getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        alert('정상적으로 삭제되었습니다.');
        console.log(data.data);
        //값바꿔치기
        getInterestSavings(pageInfo);
      })
      .catch((error) => {
        const { message } = error;
        enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
          variant: 'error',
        });
      });
  };
  const nextHandle = () => {
    const newPageInfo = { ...pageInfo, page: pageInfo.page + 1 };
    setTimeout(() => {
      getInterestSavings(newPageInfo, true);
    }, 1500);
  };
  return (
    <Stack justifyContent="start">
      <Notice isWarning />
      <Divider />
      <InfiniteScroll
        dataLength={interestSavings.length}
        next={nextHandle}
        hasMore={pageInfo.hasNext}
        loader={
          <Box sx={{ p: 2 }}>
            <h2>검색 중...</h2>
          </Box>
        }
        endMessage={
          <Box sx={{ p: 2 }}>
            <h2>총 {interestSavings.length}개 관심적금이 등록되어있습니다.</h2>
          </Box>
        }
      >
        <List>
          {!interestSavings || interestSavings.length === 0 ? (
            <Typography variant="h2">불러올 정보가 없습니다.</Typography>
          ) : (
            interestSavings.map((interestSaving, idx) => (
              <Card key={idx}>
                <CardHeader
                  avatar={
                    getImage(interestSaving) === '' ? (
                      <Avatar>{interestSaving.korCoNm}</Avatar>
                    ) : (
                      <Avatar
                        alt={interestSaving.korCoNm}
                        src={getImage(interestSaving)}
                      />
                    )
                  }
                  action={
                    <>
                      <Link href={interestSaving.homp_url} target="_blank">
                        <IconButton>
                          <OpenInNewIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={() =>
                          handleDelete(interestSaving.likeSavingId)
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                  title={interestSaving.finPrdtNm}
                  subheader={interestSaving.korCoNm}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Stack spacing={1}>
                      <Typography variant="h4" fontWeight="600">
                        {fixedSavingStaticData.saveTrm.headerName}
                      </Typography>
                      <Typography variant="h5" whiteSpace="pre-wrap">
                        {interestSaving.saveTrm} 개월
                      </Typography>
                    </Stack>
                    <Divider />
                    <Stack spacing={1}>
                      <Typography variant="h4" fontWeight="600">
                        {fixedSavingStaticData.joinDeny.headerName}
                      </Typography>
                      <Typography variant="h5" whiteSpace="pre-wrap">
                        {getJOIN_DENY(Number(interestSaving.joinDeny))}
                      </Typography>
                    </Stack>
                    <Divider />
                    <Stack>
                      <Typography variant="h4" fontWeight="600">
                        {fixedSavingStaticData.intrRate.headerName}
                      </Typography>
                      <Typography variant="h5" whiteSpace="pre-wrap">
                        {getPERCENT_WITH_TEXT(interestSaving.intrRate)}
                      </Typography>
                    </Stack>
                    <Divider />
                    <Stack>
                      <Typography variant="h4" fontWeight="600">
                        {fixedSavingStaticData.intrRate2.headerName}
                      </Typography>
                      <Typography variant="h5" whiteSpace="pre-wrap">
                        {getPERCENT_WITH_TEXT(interestSaving.intrRate2)}
                      </Typography>
                    </Stack>
                    <Divider />
                    <Stack>
                      <Typography variant="h4" fontWeight="600">
                        {fixedSavingStaticData.rsrvTypeNm.headerName}
                      </Typography>
                      <Typography variant="h5" whiteSpace="pre-wrap">
                        {interestSaving.rsrvTypeNm}
                      </Typography>
                    </Stack>
                    <Divider />
                    <Stack>
                      <Typography variant="h4" fontWeight="600">
                        {fixedSavingStaticData.intrRateTypeNm.headerName}
                      </Typography>
                      <Typography variant="h5" whiteSpace="pre-wrap">
                        {interestSaving.intrRateTypeNm}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions disableSpacing>
                  <ExpandMore
                    expand={expandeds[idx]}
                    onClick={() => handleExpandClick(idx)}
                    aria-expanded={expandeds[idx]}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expandeds[idx]} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack spacing={1}>
                        <Typography variant="h4" fontWeight="600">
                          {fixedSavingStaticData.joinWay.headerName}
                        </Typography>
                        <Typography variant="h5" whiteSpace="pre-wrap">
                          {interestSaving.joinWay}
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack spacing={1}>
                        <Typography variant="h4" fontWeight="600">
                          {fixedSavingStaticData.spclCnd.headerName}
                        </Typography>
                        <Typography variant="h5" whiteSpace="pre-wrap">
                          {interestSaving.spclCnd}
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack spacing={1}>
                        <Typography variant="h4" fontWeight="600">
                          {fixedSavingStaticData.joinMember.headerName}
                        </Typography>
                        <Typography variant="h5" whiteSpace="pre-wrap">
                          {interestSaving.joinMember}
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack spacing={1}>
                        <Typography variant="h4" fontWeight="600">
                          {fixedSavingStaticData.etcNote.headerName}
                        </Typography>
                        <Typography variant="h5" whiteSpace="pre-wrap">
                          {interestSaving.etcNote}
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack spacing={1}>
                        <Typography variant="h4" fontWeight="600">
                          {fixedSavingStaticData.maxLimit.headerName}
                        </Typography>
                        <Typography variant="h5" whiteSpace="pre-wrap">
                          {getLOCALE_MONEY(interestSaving.maxLimit)} 원
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack spacing={1}>
                        <Typography variant="h4" fontWeight="600">
                          {fixedSavingStaticData.mtrtInt.headerName}
                        </Typography>
                        <Typography variant="h5" whiteSpace="pre-wrap">
                          {interestSaving.mtrtInt}
                        </Typography>
                      </Stack>
                      <Divider />
                      <Stack spacing={1}>
                        <Typography variant="h4" fontWeight="600">
                          {fixedSavingStaticData.dcls_chrg_man.headerName}
                        </Typography>
                        <Typography variant="h5" whiteSpace="pre-wrap">
                          {interestSaving.dcls_chrg_man}
                        </Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Collapse>
              </Card>
            ))
          )}
        </List>
      </InfiniteScroll>
    </Stack>
  );
};

export default InterestFixedSaving;
