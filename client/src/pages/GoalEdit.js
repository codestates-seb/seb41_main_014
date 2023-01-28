import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ROUTE_PATH_GOAL_LIST } from '../store/routerStore';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { getACCESS_TOKEN } from '../helper/cookieHelper.js';
import { TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';
import noimage from '../asset/images/noimage.png';

const GoalEdit = () =>
  // {
  //   goal,
  //   goalPrice,
  //   monthPrice,
  //   setGoal,
  //   setGoalPrice,
  //   setMonthPrice,
  // }
  {
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
    // const goals = [
    //   { goalId: 0, goalName: '닌텐도', price: 10000, monthlyPayment: 100 },
    //   { goalId: 1, goalName: '맥북 pro', price: 20000, monthlyPayment: 200 },
    //   { goalId: 2, goalName: '갤럭시 z플립5', price: 30000, monthlyPayment: 300 },
    //   { goalId: 3, goalName: '다이슨 청소기', price: 40000, monthlyPayment: 400 },
    // ];

    return (
      <GDetailPage>
        <h2 style={{ marginTop: '30px' }}>💜 상세 위시 정보 💜</h2>
        <GDetail>
          <div>
            <button className="BackButton">
              <Link
                to={ROUTE_PATH_GOAL_LIST}
                style={{ textDecoration: 'none' }}
              >
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
            <img src={noimage} alt="no_image" style={{ width: '300px' }} />
          </div>
          <div style={{ display: 'flex' }}>
            <Title>나의 목표</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              placeholder="목표 이름"
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Title>목표 금액</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              placeholder="30,000,000원"
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Title>월 저축액</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              placeholder="30,000원"
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Title>기 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;간</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              placeholder="100개월"
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Title>생성 날짜</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              placeholder="2022-12-25"
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button className="postButton">OK</Button>
          </div>
        </GDetail>
      </GDetailPage>
    );
  };

GoalEdit.propTypes = {
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
  width: 100%;
  height: auto;
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
  .textField {
    width: 300px;
    margin-top: 22px;
  }
  .postButton {
    background-color: white;
    margin: 30px 0px 30px 0px;
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

const Title = styled.h2`
  margin: 33px 50px 0px 50px;
`;

export default GoalEdit;
