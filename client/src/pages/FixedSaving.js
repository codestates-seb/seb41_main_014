import Notice from '../components/fixedSaving/Notice';
import FixedSavingContents from '../components/fixedSaving/FixedSavingContents';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Divider, Stack } from '@mui/material';
import FixedSavingButtonGroup from '../components/fixedSaving/FixedSavingButtonGroup';
import UserSelected from '../components/fixedSaving/UserSelected';
import Conditions from '../components/fixedSaving/Conditions';
import { useEffect } from 'react';
import { setFixedSavingsInit } from '../reducer/fixedSavingsSlice';
import { setIsSearch } from '../reducer/savingConditionsSlice';

const FixedSaving = () => {
  const conditions = useSelector((state) => state.savingConditions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFixedSavingsInit());
    dispatch(setIsSearch(false));
  }, []);
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
