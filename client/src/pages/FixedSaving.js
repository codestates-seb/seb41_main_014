import { getFS_BANKS } from '../helper/fixedSavingHelper';
import InputTitleNubmer from '../components/fixedSaving/InputTitleNubmer';
import SelectGroup from '../components/fixedSaving/SelectGroup';
import BankCheck from '../components/fixedSaving/BankCheck';
import Notice from '../components/fixedSaving/Notice';
import FixedSavingContents from '../components/fixedSaving/FixedSavingContents';
import UserSelected from '../components/fixedSaving/UserSelected';
import { Divider } from '@mui/material';
import FixedSavingButtonGroup from '../components/fixedSaving/FixedSavingButtonGroup';

const FixedSaving = () => {
  const banks = getFS_BANKS();
  return (
    <>
      <Notice />
      <Divider />
      <InputTitleNubmer title="월 저축금액" unit="원" />
      <Divider />
      <SelectGroup
        title={'저축 희망 기간'}
        buttons={[
          { title: '6개월', value: 6 },
          { title: '12개월', value: 12 },
          { title: '24개월', value: 24 },
          { title: '36개월', value: 36 },
        ]}
      />
      <Divider />
      <InputTitleNubmer title="총 저축금액" unit="원" type="text" />
      <Divider />
      <SelectGroup
        title="적립방식"
        buttons={[
          { title: '전체', value: 255 },
          { title: '정액적립식', value: 256 },
          { title: '자유적립식', value: 257 },
        ]}
      />
      <Divider />
      <BankCheck title="주 거래은행" buttons={banks} />
      <Divider />
      <SelectGroup
        title={'이자계산방식'}
        buttons={[
          { title: '전체', value: 355 },
          { title: '단리', value: 356 },
          { title: '복리', value: 357 },
        ]}
      />
      <Divider />
      <Notice isWarning />
      <Divider />
      <FixedSavingContents />
      <UserSelected />
      <FixedSavingButtonGroup />
    </>
  );
};

export default FixedSaving;
