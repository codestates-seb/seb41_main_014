import GoalListGroup from '../components/goal/GoalListGroup';
import { useEffect, useState } from 'react';
// import { getACCESS_TOKEN } from '../helper/cookieHelper.js';
import { getURL_GOALS, getWITH_TOKEN } from '../store/urlStore';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ROUTE_PATH_GOAL_CREATE } from '../store/routerStore';
import { useSnackbar } from 'notistack';
import { getERROR_TEXT } from '../helper/axiosHelper';

const GoalList = () => {
  const [list, setList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const goalGet = async () => {
      axios
        .get(getURL_GOALS(), getWITH_TOKEN())
        .then((response) => {
          const { data } = response;
          setList(data.data);
        })
        .catch((error) => {
          const { message } = error;
          enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
            variant: 'error',
          });
        });
    };
    goalGet();
  }, []);

  return (
    <>
      <TotalListPage>
        <TopButton>
          <div>
            {<h2>💜 총 {list.length}개의 목표가 있습니다 💜</h2>}
            <LinkButton>
              <Link
                to={ROUTE_PATH_GOAL_CREATE}
                style={{ textDecoration: 'none' }}
              >
                {' '}
                새로 등록하러 가기{' '}
              </Link>
            </LinkButton>
          </div>
        </TopButton>
        <GoalListGroup
          _list={list}
          // goal={goal}
          // goalPrice={goalPrice}
          // monthPrice={monthPrice}
          // setGoal={setGoal}
          // setGoalPrice={setGoalPrice}
          // setMonthPrice={setMonthPrice}
          // // goalDelete={goalDelete}
          // // handleDelete={handleDelete}
          // // goalNameonChange={goalNameonChange}
          // // goalPriceonChange={goalPriceonChange}
          // // goalMonthlypaymentonChange={goalMonthlypaymentonChange}
        />
      </TotalListPage>
    </>
  );
};

export default GoalList;

GoalList.propTypes = {
  setGoal: PropTypes.string,
  setGoalPrice: PropTypes.number,
  setMonthPrice: PropTypes.number,
  goal: PropTypes.string,
  goalPrice: PropTypes.number,
  monthPrice: PropTypes.number,
};

const TotalListPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

// import { useState } from 'react';
// import { getLOCALE_MONEY } from '../helper/unitHelper';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import {
//   ROUTE_PATH_GOAL_CREATE,
//   ROUTE_PATH_GOAL_DETAIL,
//   // ROUTE_PATH_GOAL_EDIT,
//   ROUTE_PATH_FIXED_SAVING,
// } from '../store/routerStore';
// import styled from '@emotion/styled';

// const Goal = ({ goal, handleDelete }) => {
//   return (
//     <>
//       <Tempbox>
//         <li className="tempstyle">
//           <div className="SettingLine">
//             <Header>나의 목표: </Header>

//             <input className="SettingInput" value={goal.goalName} />
//           </di, monthlyPayment: 100v>
//           <div className="SettingLine">
//             <Header>목표 금액: </Header>

//             <input
//               className="SettingInput"
//               value={getLOCALE_MONEY(goal.price)}
//             />
//             <Header style={{ color: '#b1b2ff' }}>원</Header>
//           </div>
//           <div className="SettingLine">
//             <Header>한 달 입금: </Header>
//             <input
//               className="SettingInput"
//               value={getLOCALE_MONEY(goal.price / 12)}
//             />
//             <Header style={{ color: '#b1b2ff' }}>원</Header>
//           </div>
//           <Button onClick={() => handleDelete(goal.goalId)}>삭제</Button>
//           {/* <Link to={ROUTE_PATH_GOAL_EDIT}>수정</Link> */}
//           <Link to={ROUTE_PATH_GOAL_DETAIL}>상세</Link>
//         </li>
//       </Tempbox>
//     </>
//   );
// };

// Goal.propTypes = {
//   goal: PropTypes.object,
//   handleDelete: PropTypes.func,
// };

// const GoalList = () => {
//   const [goals, setGoals] = useState([
//     { goalId: 0, goalName: '목표이름', price: 10000, monthlyPayment: 100 },
//     { goalId: 1, goalName: '목표이름', price: 20000, monthlyPayment: 100 },
//     { goalId: 2, goalName: '목표이름', price: 30000, monthlyPayment: 100 },
//     { goalId: 3, goalName: '목표이름', price: 40000, monthlyPayment: 100 },
//     { goalId: 4, goalName: '목표이름', price: 50000, monthlyPayment: 100 },
//     { goalId: 5, goalName: '목표이름', price: 60000, monthlyPayment: 100 },
//     { goalId: 6, goalName: '목표이름', price: 70000, monthlyPayment: 100 },
//     { goalId: 7, goalName: '목표이름', price: 80000, monthlyPayment: 100 },
//     { goalId: 8, goalName: '목표이름', price: 90000, monthlyPayment: 100 },
//     { goalId: 9, goalName: '목표이름', price: 10000, monthlyPayment: 100 },
//   ]);

//   const handleDelete = (id) =>
//     setGoals(goals.filter((goal) => goal.goalId !== id));

//   return (
//     <>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <TempGoalTitle>
//           <div style={{ display: 'flex' }}>
//             {<h2>💜 총 {goals.length} 개의 목표가 있습니다 💜</h2>}
//             {/* 등록 시 useNavigte navigate에 값을 전달하여 처리하든 nestedRoute를 사용하여 처리하든 선택임. */}
//             {}
//           </div>
//         </TempGoalTitle>
//       </div>
//       {goals.length === 0 ? (
//         <p>없어요</p>
//       ) : (
//         <ul>
//           {goals.map((goal) => (
//             <Goal key={goal.goalId} goal={goal} handleDelete={handleDelete} />
//           ))}
//         </ul>
//       )}
//       <ButtonSet>
//         <LinkButton>
//           <Link to={ROUTE_PATH_GOAL_CREATE} style={{ textDecoration: 'none' }}>
//             새로운 목표 등록하기
//           </Link>
//         </LinkButton>
//         <Link to={ROUTE_PATH_FIXED_SAVING} style={{ textDecoration: 'none' }}>
//           적금을 추천 받고 싶어요!
//         </Link>
//       </ButtonSet>
//     </>
//   );
// };

// export default GoalList;

// // const TempPageStyle = styled.div`
// //   justify-content:center;
// // `

// const TempGoalTitle = styled.div`
//   margin-top: 20px;
//   width: 600px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
// `;

// const TempUl = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
//   margin-top: 20px;
//   list-style: none;
//   .tempstyle {
//     background-color: #eef1ff;
//     width: 568px;
//     height: 220px;
//     border-radius: 6px;
//   }
//   .SettingLine {
//     display: flex;
//     flex-direction: row;
//     justify-content: left;
//     margin-left: 20px;
//   }
//   .SettingInput {
//     text-align: center;
//     background-color: transparent;
//     width: 400px;
//     height: 30px;
//     /* margin: px; */
//     font-size: 16px;
//     border: none;
//     border-radius: 6px;
//     border-bottom: solid 2px #b1b2ff;
//     margin-top: 20px;
//     color: grey;
//     &:focus {
//       outline: none;
//       border-color: none
//       box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
//     }
//   }
//
`;

// const Header = styled.h2`;
//   margin: 30px 20px 0px 10px;
// `;

// const LinkButton = styled.button`
//   width: 214px;
//   height: 36px;
//   border: 0;
//   background-color: #b1b2ff;
//   margin-bottom: 10px;
//   border-radius: 6px;
// `;

// const ButtonSet = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 50px 0 100px 0;
//   .tempstyle {
//     background-color: aquamarine;
//     width: 584px;
//   }
// `;
