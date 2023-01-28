import SelectGroup from '../components/fixedSaving/SelectGroup';
import BankCheck from '../components/fixedSaving/BankCheck';
import Notice from '../components/fixedSaving/Notice';
import FixedSavingContents from '../components/fixedSaving/FixedSavingContents';
import { useSelector } from 'react-redux';
import { Box, Divider, Stack } from '@mui/material';
import FixedSavingButtonGroup from '../components/fixedSaving/FixedSavingButtonGroup';
import UserSelected from '../components/fixedSaving/UserSelected';
import FinishSavings from '../components/fixedSaving/FinishSavings';
import MonthlySavingsInput from '../components/fixedSaving/MonthlySavingsInput';

const FixedSaving = () => {
  const conditions = useSelector((state) => state.savingConditions);
  return (
    <Stack justifyContent="start">
      <Notice />
      <Divider />
      <MonthlySavingsInput />
      <Divider />
      <SelectGroup
        title={conditions.origin.saveTrm.fixed.title}
        buttons={conditions.origin.saveTrm.fixed.data}
      />
      <Divider />
      <FinishSavings />
      <Divider />
      <SelectGroup
        title={conditions.origin.rsrvType.fixed.title}
        buttons={conditions.origin.rsrvType.fixed.data}
      />
      <Divider />
      <BankCheck />
      <Divider />
      <SelectGroup
        title={conditions.origin.intrRateType.fixed.title}
        buttons={conditions.origin.intrRateType.fixed.data}
      />
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
