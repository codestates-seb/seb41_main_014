// import { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  ROUTE_PATH_GOAL_CREATE,
  ROUTE_PATH_GOAL_DETAIL,
} from '../../store/routerStore';
import PropTypes from 'prop-types';

const GoalListGroup = ({
  goalDelete,
  setGoal,
  setGoalPrice,
  setMonthPrice,
  goal,
  goalPrice,
  monthPrice,
}) => (
  <>
    <div style={{ display: 'flex' }}>
      <Link to={ROUTE_PATH_GOAL_CREATE} style={{ textDecoration: 'none' }}>
        {' '}
        등록하기{' '}
      </Link>
      <ComponentContain>
        <div style={{ display: 'flex' }}>
          <Button goalDelete={goalDelete}>삭제하기</Button>
          <Button>
            <Link
              to={ROUTE_PATH_GOAL_DETAIL}
              style={{ textDecoration: 'none' }}
            >
              {' '}
              상세보기{' '}
            </Link>
          </Button>
        </div>
        {/* 등록 페이지 사용 x  */}
        <br />
        <Header>나의 목표</Header>
        <Input
          className="SettingInput"
          placeholder="제네시스 GV80"
          type="text"
          onChange={(e) => setGoal(e.target.value)}
          value={goal}
        ></Input>
        <p className="p">목표 금액</p>
        <Input
          className="SettingInput"
          placeholder="61,360,000"
          type="number"
          onChange={(e) => setGoalPrice(e.target.value)}
          value={goalPrice}
        >
          원
        </Input>
        <p className="p">한 달 납입금</p>
        <Input
          className="SettingInput"
          placeholder="300,000"
          type="number"
          onChange={(e) => setMonthPrice(e.target.value)}
          value={monthPrice}
        >
          원{goal}
          {goalPrice}
        </Input>
      </ComponentContain>
    </div>
  </>
);

GoalListGroup.propTypes = {
  goalDelete: PropTypes.func,
  setGoal: PropTypes.func,
  setGoalPrice: PropTypes.func,
  setMonthPrice: PropTypes.func,
  goal: PropTypes.string,
  monthPrice: PropTypes.number,
  goalPrice: PropTypes.number,
};

export default GoalListGroup;

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
  .smallP {
    margin-bottom: 5px;
    font-weight: 500;
    text-align: left;
    color: gray;
  }

  .SettingInput {
    box-sizing: border-box;
    text-align: center;
    width: 400px;
    height: 50px;
    margin: 10px;
    font-size: 25px;
    border-bottom: solid 2px #aac4ff;
    margin-top: 20px;
    color: grey;
    &:focus {
      outline: none;
      border-color: #aac4ff;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
    }
  }
`;

const Header = styled.h3`
  margin-top: 30px;
`;
