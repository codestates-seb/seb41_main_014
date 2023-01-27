// import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
// import { getACCESS_TOKEN } from '../helper/cookieHelper.js';
import { getURL_GOALS, getWITH_TOKEN } from '../store/urlStore';
import axios from 'axios';
import GoalSetting from '../components/goal/GoalSetting';
import { useNavigate } from 'react-router-dom';

const GuideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  width: 600px;
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
`;

const CreatePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GoalCreatePage = () => {
  const navigate = useNavigate();

  const [goal, setGoal] = useState(''); // 수기 목표 이름
  const [goalPrice, setGoalPrice] = useState(''); // 수기 가격
  const [monthPrice, setMonthPrice] = useState(''); // 수기 한 달 입금

  // console.log(setGoalPrice);
  // console.log(setMonthPrice);

  // 코드 리팩토링
  const handlerGoal = (e) => {
    // console.log(e.target.value);
    setGoal(e.target.value);
  };

  const handlerGoalPrice = (e) => {
    // console.log(e.target.value);
    setGoalPrice(e.target.value);
  };

  const handlerMonthPrice = (e) => {
    setMonthPrice(e.target.value);
  };

  const goalPost = () => {
    const postdata = {
      goalName: goal,
      price: goalPrice,
      monthlyPayment: monthPrice,
    };
    axios
      .post(getURL_GOALS(), postdata, getWITH_TOKEN())
      .then((response) => {
        const { data } = response;
        console.log(data);
        setGoal('');
        setGoalPrice('');
        setMonthPrice('');
        navigate('/goalList');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <CreatePage>
      <GuideBox>
        <h2 className="TextHeader">나만의 목표를 등록하는 방법</h2>
        <br />
        <br />
        <p className="Text">
          - <span className="Hilight">&apos;나의 목표&apos;</span>에 물건을
          검색하여 시세를 찾을 수 있어요!
        </p>
        <br />
        <p className="Text">
          - <span className="Hilight">검색</span> 으로 나오지 않는다면, 직접
          작성하여 등록할 수 있어요!
        </p>
        <br />
        <p className="Text">
          - 등록된 물품은 언제든 <span className="Hilight">수정, 삭제</span>가
          가능합니다!
        </p>
        <br />
        <p className="Text">
          - 한 달에 이 물건을 위해 모을 수 있는 돈을 기입해 보아요!
        </p>
        <br />
        <p className="Text">
          - 위시리스트는 최대 <span className="Hilight">5개</span>까지 등록
          가능합니다.
        </p>
        <br />
      </GuideBox>
      <GoalSetting
        goal={goal}
        goalPrice={goalPrice}
        monthPrice={monthPrice}
        setGoal={setGoal}
        setGoalPrice={setGoalPrice}
        setMonthPrice={setMonthPrice}
        goalPost={goalPost}
        handlerGoal={handlerGoal}
        handlerExtended={handlerGoalPrice}
        handlerPeriod={handlerMonthPrice}
      />
    </CreatePage>
  );
};

export default GoalCreatePage;
