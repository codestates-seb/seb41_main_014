import { Button } from '@mui/material';
import styled from '@emotion/styled';

const CreatePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ComponentContain = styled.div`
  display: flex;
  flex-direction: column;
  display: inline-flex;
  margin: 30px;
  box-sizing: border-box;
  width: 566px;
  height: 278px;
  background-color: #eef1ff;
  border-radius: 6px;
  .SettingLine {
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-left: 20px;
  }
  .SettingInput {
    box-sizing: border-box;
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
      border-color: #8ec3b0;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
    }
  }
  .buttonSet {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .SubmitBox {
    box-sizing: border-box;
    width: 214px;
    height: 33px;
    border-radius: 4px;
    padding: 10px;
    margin: 20px 0px 20px 0px;
    text-align: center;
    background-color: #b1b2ff;
    :hover {
      box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
      .li {
        color: black;
        font-weight: 700;
      }
    }
  }
`;

// const SubmitBox = styled.div``;

const Header = styled.h2`
  margin: 30px 20px 0px 10px;
`;

const SavingCal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
`;

const GoalCreate = () => {
  return (
    <CreatePage>
      <ComponentContain>
        <br />
        <div className="SettingLine">
          <Header>나의 목표</Header>

          <input
            className="SettingInput"
            placeholder="제네시스 GV80"
            type="text"
          />
        </div>
        <div className="SettingLine">
          <Header>목표 금액</Header>
          <input
            className="SettingInput"
            placeholder="61,360,000원"
            type="number"
          />
          <Header style={{ color: '#b1b2ff' }}>원</Header>
        </div>
        <div className="SettingLine">
          <Header>목표 기간</Header>
          <input className="SettingInput" placeholder="72개월" type="number" />
          <Header style={{ color: '#b1b2ff' }}>개월</Header>
        </div>

        <SavingCal>
          <div style={{ display: 'flex' }}>
            매달 &nbsp; <span style={{ color: 'red' }}>XX원</span> &nbsp;씩
            모아야 해요!
          </div>
        </SavingCal>

        <div className="buttonSet">
          <Button
            className="SubmitBox
        "
          >
            <p>등록하기</p>
          </Button>
        </div>
      </ComponentContain>
    </CreatePage>
  );
};

export default GoalCreate;
