// import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import { getACCESS_TOKEN } from '../helper/cookieHelper.js';
import axios from 'axios';
import GoalSetting from '../components/goal/GoalSetting';

const GuideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  width: 650px;
  height: auto;
  text-align: left;
  border-top: 5px solid #aac4ff;
  border-bottom: 5px solid #aac4ff;
  margin-bottom: 50px;
  color: grey;
  .TextHeader {
    text-align: center;
    color: #aac4ff;
    width: 550px;
    font-size: 16pt;
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
  const [goal, setGoal] = useState(''); // 수기 목표 이름
  const [goalPrice, setGoalPrice] = useState(''); // 수기 가격
  const [monthPrice, setMonthPrice] = useState(''); // 수기 한 달 입금

  console.log(setGoalPrice);
  console.log(setMonthPrice);

  const handlerGoal = (e) => {
    setGoal(e.target.value);
  };

  const handlerGoalPrice = (e) => {
    setGoalPrice(e.target.value);
  };

  const handlerMonthPrice = (e) => {
    setMonthPrice(e.target.value);
  };

  const goalPost = async (memberId) => {
    const postdata = {
      goalName: goal,
      price: goalPrice,
      monthlyPayment: monthPrice,
    };
    try {
      const res = await axios.post(
        `http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/${memberId}`,
        postdata,
        {
          headers: { getACCESS_TOKEN },
        }
      );
      setGoal('');
      setGoalPrice('');
      setMonthPrice('');
      console.log('post', res);
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <CreatePage>
      <GuideBox>
        <h2 className="TextHeader">나만의 목표를 등록하는 방법</h2>
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
        goalprice={goalPrice}
        goalPost={goalPost}
        handlerGoal={handlerGoal}
        handlerExtended={handlerGoalPrice}
        handlerPeriod={handlerMonthPrice}
      />
    </CreatePage>
  );
};
export default GoalCreatePage;
