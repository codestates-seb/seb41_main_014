import Notice from '../components/fixedSaving/Notice';
import FixedSavingContents from '../components/fixedSaving/FixedSavingContents';
import { Divider, Stack } from '@mui/material';
const InterestFixedSaving = () => {
  /* 
    const dispatch = useDispatch();

  const fixedSaving = () => {

  };
  const fixedSavingCreate = () => {
    axios
      .post(getURL_SAVINGS_INTEREST(), {
        finPrdtCd: 'WR0001L',
        intrRateType: 'S',
        rsrvType: 'S',
        saveTrm: '12',
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fixedSavingList = () => {
    axios
      .get(getURL_SAVINGS_INTEREST(), getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fixedSavingDelete = () => {
    //관심목록 ID
    const interestID = 1;
    axios
      .delete(getURL_SAVINGS_INTEREST(interestID), getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  */
  return (
    <Stack justifyContent="start">
      <Notice isWarning />
      <Divider />
      <FixedSavingContents />
    </Stack>
  );
};

export default InterestFixedSaving;
