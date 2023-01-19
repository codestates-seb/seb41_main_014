import SelectGroup from '../components/fixedSaving/SelectGroup';
import BankCheck from '../components/fixedSaving/BankCheck';
import Notice from '../components/fixedSaving/Notice';
import FixedSavingContents from '../components/fixedSaving/FixedSavingContents';
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';
import FixedSavingButtonGroup from '../components/fixedSaving/FixedSavingButtonGroup';
import UserSelected from '../components/fixedSaving/UserSelected';
import FinishSavings from '../components/fixedSaving/FinishSavings';
import MonthlySavingsInput from '../components/fixedSaving/MonthlySavingsInput';

const FixedSaving = () => {
  const conditions = useSelector((state) => state.savingConditions);
  return (
    <>
      <Notice />
      <Divider />
      <MonthlySavingsInput />
      <Divider />
      <SelectGroup
        title={conditions.saveTrm.fixed.title}
        buttons={conditions.saveTrm.fixed.data}
      />
      <Divider />
      <FinishSavings />
      <Divider />
      <SelectGroup
        title={conditions.rsrvType.fixed.title}
        buttons={conditions.rsrvType.fixed.data}
      />
      <Divider />
      <BankCheck />
      <Divider />
      <SelectGroup
        title={conditions.intrRateType.fixed.title}
        buttons={conditions.intrRateType.fixed.data}
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
      <UserSelected />
      <FixedSavingButtonGroup />
    </>
  );
};

export default FixedSaving;
