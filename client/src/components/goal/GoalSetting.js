// import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border: 5px solid #aac4ff;
  .trashicon {
    margin-left: 500px;
  }
  .p {
    font-size: 17px;
    font-weight: 500;
  }
`;

const Header = styled.h3`
  margin-top: 30px;
`;

const SettingInput = styled.input`
  box-sizing: border-box;
  text-align: center;
  width: 350px;
  height: 60px;
  margin: 10px;
  font-size: 20px;
  border: solid 2px #aac4ff;
  border-radius: 10px;
  &:focus {
    outline: none;
    border-color: #aac4ff;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
`;

// const TextBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   line-height: normal;
//   box-sizing: border-box;
//   margin: auto;
//   height: 70px;
//   width: 300px;
//   color: red;
//   font-size: 30px;
// `;

const AssetSetting = ({
  goal,
  goalprice,
  monthPrice,
  goalPost,
  handlerGoal,
  handlerGoalPrice,
  handlerMonthPrice,
}) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <ComponentContain>
          <br />
          <Header>나의 목표</Header>
          <SettingInput
            placeholder="제네시스 GV80"
            type="text"
            onChange={handlerGoal}
            value={goal}
          />
          <p className="p">목표 금액(원)</p>
          <SettingInput
            placeholder="61,360,000원"
            type="number"
            onChange={handlerGoalPrice}
            value={goalprice}
          />
          <p className="p">한달 납입금(원)</p>
          <SettingInput
            placeholder="300,000원"
            type="number"
            onChange={handlerMonthPrice}
            value={monthPrice}
          />
          <p className="p">목표달성을 위한 매달 저축액은?</p>
          <>
            <Button goalPost={goalPost}>등록하기</Button>
          </>
        </ComponentContain>
      </div>
    </>
  );
};

AssetSetting.propTypes = {
  goal: PropTypes.string,
  goalprice: PropTypes.number,
  monthPrice: PropTypes.number,
  goalPost: PropTypes.func,
  handlerGoal: PropTypes.func,
  handlerGoalPrice: PropTypes.func,
  handlerMonthPrice: PropTypes.func,
};

export default AssetSetting;
