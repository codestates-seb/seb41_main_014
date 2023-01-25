import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ROUTE_PATH_GOAL_LIST } from '../store/routerStore';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { getACCESS_TOKEN } from '../helper/cookieHelper.js';
import { Input } from '@mui/material';
import PropTypes from 'prop-types';

const GoalDetail = ({
  goal,
  goalPrice,
  monthPrice,
  setGoal,
  setGoalPrice,
  setMonthPrice,
}) => {
  // const [goalName, setGoalName] = useState('');
  // const [price, setPrice] = useState('');
  // const [monthlyPayment, setMonthlyPayment] = useState('');
  // const [render, setRender] = useState(0);

  // const goalNameonChange = (e) => {
  //   setGoalName(e.target.value);
  // };

  // const goalPriceonChange = (e) => {
  //   setPrice(e.target.value);
  // };

  // const goalMonthlypaymentonChange = (e) => {
  //   setMonthlyPayment(e.target.value);
  // };
  //목표 상세 조회
  // useEffect(() => {
  //   const goalGet = async (memberId, goalId) => {
  //     try {
  //       const res = await axios.get(
  //         `http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/${memberId}/${goalId}`,
  //         {
  //           headers: { getACCESS_TOKEN },
  //         }
  //       );
  //       console.log(`get`, res);
  //     } catch (err) {
  //       console.log(`error`, err);
  //     }
  //   };
  //   goalGet();
  // }, [render]);

  // 수정
  // const goalPatch = async (memberId) => {
  //   const patchdata = {
  //     goalName: goalName,
  //     price: price,
  //     monthlyPayment: monthlyPayment,
  //   };

  //   try {
  //     const res = await axios.patch(
  //       `http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/${memberId}`,
  //       patchdata,
  //       {
  //         headers: { getACCESS_TOKEN },
  //       }
  //     );
  //     setRender((el) => el + 1);
  //     console.log(`patch`, res);
  //   } catch (err) {
  //     console.log(`patcherror`, err);
  //   }
  // };

  return (
    <GDetailPage>
      <h3 style={{ marginTop: '30px' }}>💜 상세 위시 정보 💜</h3>
      <GDetail>
        <div>
          <button className="BackButton">
            <Link to={ROUTE_PATH_GOAL_LIST} style={{ textDecoration: 'none' }}>
              ⬅️
            </Link>
          </button>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '50%' }}
            alt=" "
            src="https://www.genesis.com/content/dam/genesis-p2/kr/bto/jx/a/jx_uyh_a.png.thumb.1280.720.png"
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Title>나의 목표</Title>
        </div>

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
      </GDetail>
    </GDetailPage>
  );
};

export default GoalDetail;

GoalDetail.propTypes = {
  goal: PropTypes.string,
  goalPrice: PropTypes.number,
  monthPrice: PropTypes.number,
  setGoal: PropTypes.func,
  setGoalPrice: PropTypes.func,
  setMonthPrice: PropTypes.func,
};

const GDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GDetail = styled.div`
  width: 568px;
  height: 649px;
  border-radius: 6px;
  background-color: #eef1ff;
  margin: 30px 0 50px 0;
  .BackButton {
    border: 0;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background-color: #b1b2ff;
    margin: 5px 5px 5px 5px;
    font-size: large;
    color: #626262;
  }
`;

const Title = styled.h2`
  margin: 33px 50px 0px 50px;
`;
