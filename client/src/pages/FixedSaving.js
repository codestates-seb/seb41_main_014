import { getFS_BANKS } from '../helper/fixedSavingHelper';
import InputTitleNubmer from '../components/fixedSaving/InputTitleNubmer';
import SelectGroup from '../components/fixedSaving/SelectGroup';
import BankCheck from '../components/fixedSaving/BankCheck';
import Notice from '../components/fixedSaving/Notice';
import FixedSavingContents from '../components/fixedSaving/FixedSavingContents';
import UserSelected from '../components/fixedSaving/UserSelected';
import { Divider } from '@mui/material';
import FixedSavingButtonGroup from '../components/fixedSaving/FixedSavingButtonGroup';
import { useState } from 'react';

const FixedSaving = () => {
  const [conditions, setConditions] = useState({
    monthlySavings: {
      title: '월 저축금액',
      unit: '원',
      value: 0,
    },
    saveTrm: {
      title: '저축 희망 기간',
      data: [
        { title: '6개월', value: 6 },
        { title: '12개월', value: 12 },
        { title: '24개월', value: 24 },
        { title: '36개월', value: 36 },
      ],
      value: 6,
    },
    finishSavings: {
      title: '총 저축금액',
      unit: '원',
      value: 0,
    },
    rsrvType: {
      title: '적립방식',
      data: [
        { title: '전체', value: null },
        { title: '정액적립식', value: 'S' },
        { title: '자유적립식', value: 'F' },
      ],
      value: null,
    },
    banks: getFS_BANKS(),
    intrRateType: {
      title: '이자계산방식',
      data: [
        { title: '전체', value: null },
        { title: '단리', value: 'S' },
        { title: '복리', value: 'M' },
      ],
      value: null,
    },
    joinDeny: {
      title: '가입대상',
      data: [
        { title: '전체', value: 0 },
        { title: '제한없음', value: 1 },
        { title: '서민전용', value: 2 },
        { title: '일부제한', value: 3 },
      ],
      value: 0,
    },
  });
  console.log(setConditions);
  const [isSearch, setIsSearch] = useState(true);
  console.log(setIsSearch);
  return (
    <>
      <Notice />
      <Divider />
      <InputTitleNubmer
        title={conditions.monthlySavings.title}
        unit={conditions.monthlySavings.unit}
      />
      <Divider />
      <SelectGroup
        title={conditions.saveTrm.title}
        buttons={conditions.saveTrm.data}
      />
      <Divider />
      <InputTitleNubmer
        title={conditions.finishSavings.title}
        unit={conditions.finishSavings.unit}
        type="text"
      />
      <Divider />
      <SelectGroup
        title={conditions.rsrvType.title}
        buttons={conditions.rsrvType.data}
      />
      <Divider />
      <BankCheck title="주 거래은행" buttons={conditions.banks} />
      <Divider />
      <SelectGroup
        title={conditions.intrRateType.title}
        buttons={conditions.intrRateType.data}
      />
      {isSearch ? (
        <>
          <Divider />
          <Notice isWarning />
          <Divider />
          <FixedSavingContents />{' '}
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
