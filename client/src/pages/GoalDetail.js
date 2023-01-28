import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  ROUTE_PATH_GOAL_EDIT,
  ROUTE_PATH_GOAL_LIST,
} from '../store/routerStore';
import { getURL_GOALS, getWITH_TOKEN } from '../store/urlStore';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { getACCESS_TOKEN } from '../helper/cookieHelper.js';
import { TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';
import noimage from '../asset/images/noimage.png';

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
// 목표 상세 조회
// useEffect(() => {
//   const goalGet = async (goalId) => {
//     try {
//       const res = await axios.get(
//         `http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/${goalId}`,
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

const GoalDetail = (goalId) => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    // setPageData(data);
    init(goalId);
  }, []);

  useEffect(() => {}, [pageData]);

  const init = async (goalId) => {
    const result = await axios.get(getURL_GOALS(goalId));
    setPageData(result.data);
  };

  axios
    .get(getURL_GOALS(goalId), getWITH_TOKEN())
    .then((response) => {
      const { data } = response;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
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
      <h2 style={{ marginTop: '30px' }}>💜 상세 위시 정보 💜</h2>
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
          <img src={noimage} alt="no_image" style={{ width: '300px' }} />
        </div>
        <div style={{ display: 'flex' }}>
          <Title>나의 목표</Title>
          <TextField
            className="textField"
            id="standard-read-only-input"
            defaultValue="목표 이름"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Title>목표 금액</Title>
          <TextField
            className="textField"
            id="standard-read-only-input"
            defaultValue="30,000,000원"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Title>월 저축액</Title>
          <TextField
            className="textField"
            id="standard-read-only-input"
            defaultValue="30,000원"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Title>기 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;간</Title>
          <TextField
            className="textField"
            id="standard-read-only-input"
            defaultValue="100개월"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
        <div style={{ display: 'flex' }}>
          <Title>생성 날짜</Title>
          <TextField
            className="textField"
            id="standard-read-only-input"
            defaultValue="2022-12-25"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button className="postButton">
            <Link to={ROUTE_PATH_GOAL_EDIT} style={{ textDecoration: 'none' }}>
              EDIT
            </Link>
          </Button>
        </div>
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
