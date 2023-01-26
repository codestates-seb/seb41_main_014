// import { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  ROUTE_PATH_GOAL_CREATE,
  ROUTE_PATH_GOAL_DETAIL,
} from '../../store/routerStore';
import PropTypes from 'prop-types';

const GoalListGroup = ({
  // goalDelete,
  // goals,
  // setGoal,
  // setGoalPrice,
  // setMonthPrice,
  // goal,
  // goalPrice,
  // monthPrice,
  goals,
  handleDelete,
}) => (
  <>
    <TopButton>
      <div>
        {<h2>💜 총 {goals.length} 개의 목표가 있습니다 💜</h2>}
        <LinkButton>
          <Link to={ROUTE_PATH_GOAL_CREATE} style={{ textDecoration: 'none' }}>
            {' '}
            새로 등록하러 가기{' '}
          </Link>
        </LinkButton>
      </div>
    </TopButton>

    <ComponentContain>
      <ul>
        {goals.map((goal) => (
          <li key={goal.goalId}>
            <div style={{ display: 'flex' }}>
              <Header>나의 목표: </Header>{' '}
              <input className="SettingInput" value={goal.goalName} />
            </div>
            <div style={{ display: 'flex' }}>
              <Header>목표 금액: </Header>{' '}
              <input className="SettingInput" value={goal.price} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'right' }}>
              <Button onClick={handleDelete}>삭제하기</Button>
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
          </li>
        ))}
      </ul>

      {/* 등록 페이지 사용 x 
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
      </Input> */}
    </ComponentContain>
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
  handleDelete: PropTypes.func,
  goals: PropTypes.object,
  listItems: PropTypes.func,
};

export default GoalListGroup;

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px 0 30px;
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
    text-align: center;
    background-color: transparent;
    width: 400px;
    height: 30px;
    /* margin: px; */
    font-size: 16px;
    border: none;
    border-radius: 6px;
    border-bottom: solid 2px #b1b2ff;
    margin-top: 20px;
    color: grey;
    &:focus {
      outline: none;
      border-color: none;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
    }
  }

  .li {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
`;

// const Header = styled.h3`
//   margin-top: 30px;
// `;

const LinkButton = styled.button`
  width: 214px;
  height: 36px;
  border: 0;
  background-color: #b1b2ff;
  margin: 10px 0 10px;
  border-radius: 6px;
`;

const TopButton = styled.div`
  width: 600px;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Header = styled.h2`
  margin: 30px 20px 0px 10px;
`;
