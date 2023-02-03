import styled from '@emotion/styled';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setGoalCreate } from '../../reducer/goalCreateSlice';

const AssetSetting = ({ goalPost }) => {
  const goalData = useSelector((state) => state.goalCreate);
  const dispatch = useDispatch();
  const setInputChange = (e) => {
    const result = {};
    result[e.target.name] = e.target.value;
    dispatch(setGoalCreate(result));
  };
  return (
    <>
      <div style={{ display: 'flex', width: '100%', maxWidth: '600px' }}>
        <ComponentContain>
          <br />
          <LineBox>
            <Header>나의 목표</Header>
            <SettingInput
              name="goalName"
              placeholder="제네시스 GV80"
              type="text"
              onChange={setInputChange}
              value={goalData.data.goalName}
            />
          </LineBox>
          <LineBox>
            <Header>목표 금액</Header>
            <SettingInput
              name="price"
              placeholder="61,360,000"
              type="number"
              step="1000"
              onChange={setInputChange}
              value={goalData.data.price}
            />
          </LineBox>
          <LineBox>
            <Header>월 입금액</Header>
            <SettingInput
              name="monthlyPayment"
              placeholder="300,000"
              type="number"
              step="1000"
              onChange={setInputChange}
              value={goalData.data.monthlyPayment}
            />
          </LineBox>
          <p className="p">목표달성을 위한 기간은?</p>
          <>
            <Button className="postButton" onClick={goalPost}>
              SUBMIT
            </Button>
          </>
        </ComponentContain>
      </div>
    </>
  );
};

AssetSetting.propTypes = {
  goalPost: PropTypes.func,
};

export default AssetSetting;

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px 0 50px 0;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  height: auto;
  border: 5px solid #aac4ff;
  background-color: #aac4ff;
  border-radius: 10px;
  .trashicon {
    margin-left: 500px;
  }
  .p {
    font-size: 17px;
    font-weight: 500;
  }
  .postButton {
    background-color: white;
    margin: 10px 0px 10px 0px;
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

const Header = styled.h1`
  color: #424242;
  margin: 30px 10px 0px 20px;
  width: 30%;
`;

const SettingInput = styled.input`
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  height: 60px;
  margin: 10px;
  font-size: 20px;
  border: solid 2px #aac4ff;
  border-radius: 10px;
  &:focus {
    outline: none;
    border-color: #aac4ff;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
  }
`;

const LineBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
