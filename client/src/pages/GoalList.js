import { useState } from 'react';
import { getLOCALE_MONEY } from '../helper/unitHelper';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {
  ROUTE_PATH_GOAL_CREATE,
  ROUTE_PATH_GOAL_DETAIL,
  ROUTE_PATH_GOAL_EDIT,
} from '../store/routerStore';
import styled from '@emotion/styled';

const Goal = ({ goal, handleDelete }) => {
  return (
    <>
      <Tempbox>
        <li className="tempstyle">
          <p>이름: {goal.goal_name}</p>
          <p>가격: {getLOCALE_MONEY(goal.price)}</p>
          <Button onClick={() => handleDelete(goal.goal_id)}>삭제</Button>
          <Link to={ROUTE_PATH_GOAL_EDIT}>수정</Link>
          <Link to={ROUTE_PATH_GOAL_DETAIL}>상세</Link>
        </li>
      </Tempbox>
    </>
  );
};

Goal.propTypes = {
  goal: PropTypes.object,
  handleDelete: PropTypes.func,
};

const GoalList = () => {
  const [goals, setGoals] = useState([
    { goal_id: 0, goal_name: '목표이름', price: 10000 },
    { goal_id: 1, goal_name: '목표이름', price: 20000 },
    { goal_id: 2, goal_name: '목표이름', price: 30000 },
    { goal_id: 3, goal_name: '목표이름', price: 40000 },
    { goal_id: 4, goal_name: '목표이름', price: 50000 },
    { goal_id: 5, goal_name: '목표이름', price: 60000 },
    { goal_id: 6, goal_name: '목표이름', price: 70000 },
    { goal_id: 7, goal_name: '목표이름', price: 80000 },
    { goal_id: 8, goal_name: '목표이름', price: 90000 },
    { goal_id: 9, goal_name: '목표이름', price: 10000 },
  ]);

  const handleDelete = (id) =>
    setGoals(goals.filter((goal) => goal.goal_id !== id));

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TempGoalTitle>
          <div style={{ display: 'flex' }}>
            {<h3>💜 총 {goals.length} 개의 목표가 있습니다 💜</h3>}
            {/* 등록 시 useNavigte navigate에 값을 전달하여 처리하든 nestedRoute를 사용하여 처리하든 선택임. */}
            {<Link to={ROUTE_PATH_GOAL_CREATE}>등록하기</Link>}
          </div>
        </TempGoalTitle>
      </div>
      {goals.length === 0 ? (
        <p>없어요</p>
      ) : (
        <ul>
          {goals.map((goal) => (
            <Goal key={goal.goal_id} goal={goal} handleDelete={handleDelete} />
          ))}
        </ul>
      )}
    </>
  );
};

export default GoalList;

// const TempPageStyle = styled.div`
//   justify-content:center;
// `

const TempGoalTitle = styled.div`
  margin-top: 20px;
  background-color: pink;
  width: 600px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Tempbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
  list-style: none;
  .tempstyle {
    background-color: #eef1ff;
    width: 568px;
    height: 167px;
    border-radius: 6px;
  }
`;
