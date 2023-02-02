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
        <GuideBox>
          <h2 className="TextHeader">나만의 목표 한눈에 보기</h2>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {
              <div>
                <p className="Text">
                  - <span className="Hilight">목표 목록</span>에서 나의 목표와
                  금액을 한번에 확인할 수 있어요!
                </p>
                <br />
                <p className="Text">
                  - 목표가 적힌 카드를 누르면,{' '}
                  <span className="Hilight">상세 페이지</span>를 볼 수 있어요!
                </p>
                <br />
                <p className="Text">
                  - 상세 페이지에서 언제든 목표{' '}
                  <span className="Hilight">수정, 삭제</span>가 가능합니다!
                </p>
                <br />
                <p className="Text">
                  - 검색으로 물품을 등록했다면, 상세 페이지에서{' '}
                  <span className="Hilight">이미지</span>도 확인할 수 있어요!
                </p>
                <br />
                <p className="Text">
                  -{' '}
                  <span className="Hilightt">
                    또 다른 물품
                    <span className="tooltip-text">
                      새로 등록하러 가기 버튼을 눌러보세요!
                    </span>
                  </span>
                  을 등록하고 싶으신가요?
                </p>
              </div>
            }
            <br />
            {
              <div className="LinkButton">
                <Link
                  to={ROUTE_PATH_GOAL_CREATE}
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                >
                  <p className="CreateText">새로 등록하기</p>{' '}
                </Link>
              </div>
            }
          </div>
        </GuideBox>

        <TopButton>
          <div>{<h2>✧ 총 {list.length}개의 목표가 있습니다 ✧</h2>}</div>
        </TopButton>
        <GoalListGroup _list={list} />
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

const GuideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  max-width: 600px;
  width: 100%;
  height: auto;
  text-align: left;
  border-top: 5px solid #aac4ff;
  border-bottom: 5px solid #aac4ff;
  margin: 50px 0 50px;
  color: grey;
  .TextHeader {
    text-align: center;
    color: #aac4ff;
    width: 600px;
    font-size: 16pt;
    margin-top: 20px;
  }
  .Text {
    font-size: 12px;
  }
  .Hilight {
    color: #aac4ff;
  }
  .Hilightt {
    color: #ff6f6f;
  }
  .tooltip-text {
    display: none;
    position: absolute;
    max-width: 200px;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
    font-size: 0.8em;
    color: white;
    background: gray;
  }
  .Hilightt:hover .tooltip-text {
    display: block;
  }

  .LinkButton {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: right;
    margin: 54px 0 10px;
    width: 150px;
    height: 40px;
    background: #aac4ff;
    border-radius: 10px;
  }
  .LinkButton::before {
    border-top: 5px solid transparent;
    border-right: 20px solid #aac4ff;
    border-bottom: 5px solid transparent;
    content: '';
    position: relative;
    top: -15px;
    left: -32px;
  }
  .CreateText {
    font-size: 12px;
    color: white;
    margin: 0 28px 12px 0px;
  }
`;
const TopButton = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

// const LinkButton = styled.button`
//   margin: 10px 0 10px;
//   width: 214px;
//   height: 40px;
//   background: pink;
//   border-radius: 10px;
//   .LinkButton::before {
//     border-top: 0px solid transparent;
//     border-left: 10px solid transparent;
//     border-right: 10px solid transparent;
//     border-bottom: 10px solid #aac4ff;
//     content: '';
//     position: absolute;
//     top: -10px;
//     left: 20px;
//   }
// `;

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
