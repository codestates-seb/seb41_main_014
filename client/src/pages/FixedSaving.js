import Notice from '../components/fixedSaving/Notice';
import FixedSavingContents from '../components/fixedSaving/FixedSavingContents';
import { useSelector } from 'react-redux';
import { Box, Divider, Stack } from '@mui/material';
import FixedSavingButtonGroup from '../components/fixedSaving/FixedSavingButtonGroup';
import UserSelected from '../components/fixedSaving/UserSelected';
import Conditions from '../components/fixedSaving/Conditions';

const FixedSaving = () => {
  const conditions = useSelector((state) => state.savingConditions);

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
      <Notice />
      <Divider />
      <Conditions />
      {conditions.isSearch ? (
        <>
          <Divider />
          <Notice isWarning />
          <Divider />
          <FixedSavingContents />
        </>
      ) : (
        ''
      )}
      <Box sx={{ mb: 4 }}>
        <UserSelected />
        <FixedSavingButtonGroup />
      </Box>
    </Stack>
  );
};

export default FixedSaving;
