import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import {
  getFS_BANKS,
  getFS_DATA,
  getJOIN_DENY,
} from '../../helper/fixedSavingHelper';
import { useState } from 'react';
import { getLOCALE_MONEY, getPERCENT_WITH_TEXT } from '../../helper/unitHelper';
import GridColumn from './GridColumn';
import GridRow from './GridRow';
import FiexedSavingContentDetailItem from './FixedSavingContentDetailItem';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import {
  setFixedSavings,
  setFixedSavingsPageInfo,
} from '../../reducer/fixedSavingsSlice';
import {
  getURL_SAVINGS_INTEREST,
  getWITH_PARAMS,
  getWITH_TOKEN,
  URL_SAVINGS,
} from '../../store/urlStore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router';
import { ROUTE_PATH_LOGIN } from '../../store/routerStore';
import { useSnackbar } from 'notistack';
import { getERROR_TEXT } from '../../helper/axiosHelper';

const FixedSavingContents = () => {
  const conditions = useSelector((state) => state.savingConditions.origin);
  const [expanded, setExpanded] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const nextHandle = () => {
    const getBanksCode = () => {
      const finCodes = [];
      for (let index = 0; index < conditions.banks.isCheckeds.length; index++) {
        const el = conditions.banks.isCheckeds[index];
        if (el) {
          finCodes.push(index);
        }
      }
      //전체일때
      if (
        finCodes.length === conditions.banks.isCheckeds.length ||
        finCodes.length === 0
      )
        return [];
      //선택된것만 추출
      for (let index = 0; index < finCodes.length; index++) {
        finCodes[index] = conditions.banks.fixed.data[index].finCoNo;
      }
      return finCodes;
    };

    setTimeout(() => {
      axios
        .post(
          URL_SAVINGS,
          {
            monthlySavings: conditions.monthlySavings.value,
            saveTrm: conditions.saveTrm.value,
            rsrvType:
              conditions.rsrvType.value === -1
                ? undefined
                : conditions.rsrvType.value,
            finCoNoList: getBanksCode(),
            intrRateType:
              conditions.intrRateType.value === -1
                ? undefined
                : conditions.intrRateType.value,
            joinDeny:
              conditions.joinDeny.value === -1
                ? undefined
                : conditions.joinDeny.value,
          },
          getWITH_PARAMS({
            page: fixedSavings.pageInfo.origin.page + 1,
            size: fixedSavings.pageInfo.origin.size,
          })
        )
        .then((response) => {
          const { data } = response;
          if (data.data.length === 0) {
            enqueueSnackbar('해당 정보가 없습니다.', {
              variant: 'success',
            });
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

          const hasMore = data.pageInfo.page < data.pageInfo.totalPages;
          dispatch(
            setFixedSavingsPageInfo({ origin: data.pageInfo, hasMore: hasMore })
          );

          const newData = fixedSavings.origin.concat(originData);
          dispatch(setFixedSavings(newData));
          //페이지 정보
        })
        .catch((error) => {
          const { message } = error;
          enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
            variant: 'error',
          });
        });
    }, 1500);
  };
  const column = getFS_DATA();
  const fixedSavings = useSelector((state) => state.fixedSavings);

  const userInfo = useSelector((state) => state.isLogin.userInfo);
  const navigate = useNavigate();
  const handelInterestSavings = (e, saving) => {
    if (userInfo.id === -1) {
      enqueueSnackbar('로그인 후 시도해주세요.', {
        variant: 'warning',
      });
      navigate(ROUTE_PATH_LOGIN);
      return;
    }
    if (
      !saving.likeSavingId ||
      saving.likeSavingId === '' ||
      saving.likeSavingId === 'null'
    ) {
      axios
        .post(getURL_SAVINGS_INTEREST(), saving, getWITH_TOKEN())
        .then(() => {
          // const { data } = response;
          // alert('정상적으로 등록되었습니다.');
          // console.log(data.data);
          //TODO likeId 갱신시켜 버튼 채워지도록해야됨.
        })
        .catch((error) => {
          const { message } = error;
          enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
            variant: 'error',
          });
        });
    } else {
      axios
        .delete(getURL_SAVINGS_INTEREST(saving.likeSavingId), getWITH_TOKEN())
        .then(() => {
          // const { data } = response;
          // alert('정상적으로 등록되었습니다.');
          // console.log(data.data);
          //TODO likeId 갱신시켜 버튼 비워지도록해야됨.
        })
        .catch((error) => {
          const { message } = error;
          enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
            variant: 'error',
          });
        });
    }
  };
  return (
    <Box
      sx={(theme) => ({
        width: '98.5%',
        height: 'auto',
        mt: 2,
        mb: 2,
        border: `4px solid ${theme.colors.mainMiddle}`,
        borderRadius: 2,
        backgroundColor: theme.colors.mainMiddle,
      })}
    >
      <Grid container alignItems="center">
        <Stack direction="row" flexGrow={1}>
          <GridColumn
            data={column.korCoNm.headerName}
            xs={3.5}
            column={column}
          />
          <GridColumn
            data={column.finPrdtNm.headerName}
            xs={3.5}
            column={column}
          />
          <GridColumn
            data={column.joinDeny.headerName}
            xs={1.5}
            column={column}
          />
          <GridColumn
            data={column.intrRate.headerName}
            xs={1}
            column={column}
          />
          <GridColumn
            data={column.intrRateTypeNm.headerName}
            xs={1}
            column={column}
          />
          <GridColumn
            data={column.interestAmount.headerName}
            xs={2}
            column={column}
          />
        </Stack>
      </Grid>
      <InfiniteScroll
        dataLength={fixedSavings.origin.length}
        next={nextHandle}
        hasMore={fixedSavings.pageInfo.hasMore}
        loader={
          <Box sx={{ p: 2 }}>
            <h2>검색 중...</h2>
          </Box>
        }
        endMessage={
          <Box sx={{ p: 2 }}>
            <h2>총 {fixedSavings.origin.length}개 적금이 검색되었습니다.</h2>
          </Box>
        }
      >
        {fixedSavings.origin.map((fixedSaving, index) => (
          <Accordion
            key={index}
            sx={(theme) => ({
              backgroundColor: theme.colors.mainLight,
              borderRadius: 1,
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
              '&:active': {
                opacity: 0.6,
              },
            })}
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <Stack direction="row">
              <IconButton onClick={handelInterestSavings}>
                {!fixedSaving.likeSavingId ||
                fixedSaving.likeSavingId === 'null' ||
                fixedSaving.likeSavingId === '' ? (
                  <StarBorderIcon />
                ) : (
                  <StarIcon />
                )}
              </IconButton>
              <AccordionSummary sx={{ p: 0, flexGrow: 1 }}>
                <Grid
                  container
                  sx={() => ({
                    display: 'flex',
                    justifyContent: 'center',
                  })}
                >
                  <Grid
                    item
                    xs={3}
                    sx={() => ({
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'left',
                      pr: 1,
                      pl: 1,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({ p: 1, fontSize: theme.fontSizes.lg })}
                    >
                      {fixedSaving.korCoNm}
                    </Typography>
                  </Grid>
                  <GridRow data={fixedSaving.finPrdtNm} xs={3.5} />
                  <GridRow
                    data={getJOIN_DENY(Number(fixedSaving.joinDeny))}
                    xs={1.5}
                    align="center"
                  />
                  <GridRow
                    data={getPERCENT_WITH_TEXT(fixedSaving.intrRate)}
                    xs={1}
                    align="end"
                  />
                  <GridRow
                    data={fixedSaving.intrRateTypeNm}
                    xs={1}
                    align="center"
                  />
                  <GridRow
                    data={getLOCALE_MONEY(fixedSaving.interestAmount)}
                    xs={2}
                    align="end"
                  />
                </Grid>
              </AccordionSummary>
            </Stack>
            <AccordionDetails
              sx={(theme) => ({
                backgroundColor: theme.colors.white,
                borderRadius: 1,
                p: 2,
              })}
            >
              {Object.entries(fixedSaving)
                .filter(
                  (el) =>
                    el[0] === column.rsrvTypeNm.field ||
                    el[0] === column.joinWay.field ||
                    el[0] === column.spclCnd.field ||
                    el[0] === column.mtrtInt.field ||
                    el[0] === column.joinMember.field ||
                    el[0] === column.etcNote.field ||
                    el[0] === column.maxLimit.field ||
                    el[0] === column.intrRate2.field
                )
                .map((el) => (
                  <FiexedSavingContentDetailItem
                    key={el[0]}
                    title={column[el[0]].headerName}
                    content={
                      el[0] === column.maxLimit.field
                        ? getLOCALE_MONEY(el[1])
                        : el[0] === column.intrRate2.field
                        ? getPERCENT_WITH_TEXT(el[1])
                        : el[1]
                    }
                  />
                ))}
              <FiexedSavingContentDetailItem
                title={column.dcls_chrg_man.headerName}
                content={fixedSaving.dcls_chrg_man}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export default FixedSavingContents;
