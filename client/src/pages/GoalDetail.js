import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ROUTE_PATH_GOAL_LIST } from '../store/routerStore';

const GoalDetail = () => {
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
      </GDetail>
    </GDetailPage>
  );
};

export default GoalDetail;

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
