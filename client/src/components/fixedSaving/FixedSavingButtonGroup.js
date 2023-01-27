import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import RestorePageTwoToneIcon from '@mui/icons-material/RestorePageTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { Button, Grid, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setConditionsInit,
  setIsSearch,
} from '../../reducer/savingConditionsSlice';
import axios from 'axios';
import {
  setFixedSavings,
  setFixedSavingsIsExtendable,
  setFixedSavingsPageInfo,
} from '../../reducer/fixedSavingsSlice';

const StyledButton = styled(Button)`
  width: 100%;
  border-radius: 0;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.buttontype === -1
      ? props.theme.colors.accent
      : props.buttontype === 1001
      ? props.theme.colors.mainMiddleLight
      : props.theme.colors.mainMiddle};
  :hover {
    background-color: ${(props) =>
      props.buttontype === -1
        ? props.theme.colors.accent
        : props.buttontype === 1001
        ? props.theme.colors.mainMiddleLight
        : props.theme.colors.mainMiddle};
    opacity: 0.8;
  }
  :active {
    background-color: ${(props) =>
      props.buttontype === -1
        ? props.theme.colors.accent
        : props.buttontype === 1001
        ? props.theme.colors.mainMiddleLight
        : props.theme.colors.mainMiddle};
    opacity: 0.6;
  }
`;

const FixedSavingButtonGroup = () => {
  const navigate = useNavigate();
  const conditions = useSelector((state) => state.savingConditions.origin);
  const fixedSavings = useSelector((state) => state.fixedSavings);
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate(-1);
  };
  const handleInit = () => {
    dispatch(setConditionsInit());
    console.log(conditions);
  };
  const handleSearch = () => {
    // if (conditions.monthlySavings.value < 1) return alert('1이상 입력');

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

    axios
      .post(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/savings',
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
        {
          headers: { withCredentials: true },
          params: {
            page: fixedSavings.pageInfo.origin.page,
            size: fixedSavings.pageInfo.origin.size,
          },
        }
      )
      .then((response) => {
        const { data } = response;
        if (data.data.length === 0) {
          alert('succeed: No data');
          return;
        }
        console.log(data);
        // 데이터 세팅
        dispatch(setFixedSavings(data.data));
        // accordion extendable boolean 세팅
        dispatch(setFixedSavingsIsExtendable(false));
        // 검색 시 리스트 나오게하는값 세팅
        dispatch(setIsSearch(true));
        //페이지 정보
        const pageInfo = data.pageInfo;
        dispatch(
          setFixedSavingsPageInfo({
            origin: pageInfo,
            hasMore: pageInfo.page < pageInfo.totalPages,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <Grid container>
      <Grid item xs={4}>
        <StyledButton
          sx={{ borderBottomLeftRadius: 8 }}
          buttontype={-1}
          onClick={handleBack}
        >
          <ArrowBackTwoToneIcon fontSize="large" />
        </StyledButton>
      </Grid>
      <Grid item xs={4}>
        <StyledButton buttontype={1001} onClick={handleInit}>
          <RestorePageTwoToneIcon fontSize="large" />
        </StyledButton>
      </Grid>
      <Grid item xs={4}>
        <StyledButton
          sx={{ borderBottomRightRadius: 8 }}
          onClick={handleSearch}
        >
          <SearchTwoToneIcon fontSize="large" />
        </StyledButton>
      </Grid>
    </Grid>
  );
};

export default FixedSavingButtonGroup;