// import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
// import { ROUTE_PATH_GOAL_LIST } from '../../store/routerStore';
// import { Link } from 'react-router-dom';

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px;
  box-sizing: border-box;
  width: 600px;
  height: auto;
  border: 5px solid #aac4ff;
  background-color: #aac4ff;
  border-radius: 10px;
  .trashicon {
    margin-left: 500px;
  }
  .p {
    font-size: 17px;
    font-weight: 500;
  }
  .postButton {
    background-color: white;
    margin: 10px 0px 10px 0px;
    font-size: 20px;
    color: #aac4ff;
    width: 30%;
    &:hover {
      outline: none;
      border-color: #aac4ff;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
    }
  }
`;

const Header = styled.h1`
  color: #424242;
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

const LineBox = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-around;
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
  goalPrice,
  monthPrice,
  goalPost,
  setGoal,
  setMonthPrice,
  setGoalPrice,
  // handlerGoal,
  // handlerGoalPrice,
  // handlerMonthPrice,
}) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <ComponentContain>
          <br />
          <LineBox>
            <Header>나의 목표</Header>
            <SettingInput
              placeholder="제네시스 GV80"
              type="text"
              onChange={(e) => setGoal(e.target.value)}
              value={goal}
            />
          </LineBox>
          <LineBox>
            <Header>목표 금액</Header>
            <SettingInput
              placeholder="61,360,000"
              type="number"
              onChange={(e) => setGoalPrice(e.target.value)}
              value={goalPrice}
            />
          </LineBox>
          <LineBox>
            <Header>월 입금액</Header>
            <SettingInput
              placeholder="300,000"
              type="number"
              onChange={(e) => setMonthPrice(e.target.value)}
              value={monthPrice}
            />
          </LineBox>
          <p className="p">목표달성을 위한 기간은?</p>
          <>
            <Button className="postButton" onClick={goalPost}>
              SUBMIT
            </Button>
          </>
        </ComponentContain>
      </div>
    </>
  );
};

AssetSetting.propTypes = {
  goal: PropTypes.string,
  goalPrice: PropTypes.number,
  monthPrice: PropTypes.number,
  goalPost: PropTypes.func,
  handlerGoal: PropTypes.func,
  handlerGoalPrice: PropTypes.func,
  handlerMonthPrice: PropTypes.func,
  setGoal: PropTypes.string,
  setGoalPrice: PropTypes.number,
  setMonthPrice: PropTypes.number,
};

export default AssetSetting;
