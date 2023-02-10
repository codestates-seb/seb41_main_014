import { useState, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTE_PATH_GOAL_DETAIL } from '../../store/routerStore';
import PropTypes from 'prop-types';
// import { color } from '@mui/system';
import { PieChart } from 'react-minimal-pie-chart';

const GoalListGroup = ({ _list }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(_list);
  }, [_list]);

  return (
    <>
      {list.map((item, index) => {
        return (
          <Fragment key={index}>
            <Link
              // to={`/api/goals/${item.id}`}
              to={ROUTE_PATH_GOAL_DETAIL}
              // to={`goalDetail/${item.id}`}
              style={{ textDecoration: 'none', color: '#b1b2ff' }}
              state={{ data: item, goalId: item.id }}
            >
              <ComponentContain>
                <div style={{ display: 'flex' }}>
                  <div style={{ flex: '4' }}>
                    <div style={{ display: 'flex' }}>
                      <Header>나의 목표 </Header>{' '}
                      <input
                        className="SettingInput"
                        defaultValue={item.goalName}
                      />
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Header>목표 금액 </Header>{' '}
                      <input
                        className="SettingInput"
                        defaultValue={item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      />
                    </div>
                    <div style={{ display: 'flex' }}>
                      <Header>월 납입금 </Header>{' '}
                      <input
                        className="SettingInput"
                        defaultValue={item.monthlyPayment
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      />
                    </div>
                  </div>
                  <div style={{ flex: '1' }}>
                    <PieChart
                      data={[
                        {
                          value: item.progress,
                          color: '#aac4ff',
                          name: 'progress',
                        },
                      ]}
                      style={{ margin: '20px 10px 0 0' }}
                      reveal={item.progress}
                      lineWidth={18}
                      background="#f3f3f3"
                      lengthAngle={360}
                      rounded
                      animate
                      label={({ dataEntry }) => dataEntry.value + '%'}
                      labelStyle={{
                        fontSize: '20px',
                        fill: '#aac4ff',
                      }}
                      labelPosition={0}
                    />
                  </div>
                </div>
                <div className="h2">
                  {item.status === 'PROGRESS' ? (
                    <h2 className="Font">
                      목표치에 도달하기까지{' '}
                      <span className="Hilight">
                        {Math.ceil(item.price / item.monthlyPayment)}개월
                      </span>{' '}
                      남았어요!
                    </h2>
                  ) : (
                    <h2 className="Font"> 목표치에 도달하였어요!</h2>
                  )}
                </div>

                {/* 버튼부분 */}
                {/* <div style={{ display: 'flex', justifyContent: 'right' }}>
                <Button>
                    <Link
                      to={ROUTE_PATH_GOAL_DETAIL}
                      style={{ textDecoration: 'none' }}
                    >
                      {' '}
                      상세보기{' '}
                    </Link>
                  </Button>
              </div> */}
              </ComponentContain>
            </Link>
          </Fragment>
        );
      })}
    </>
  );
};

GoalListGroup.propTypes = {
  goalDelete: PropTypes.func,
  setGoal: PropTypes.func,
  setGoalPrice: PropTypes.func,
  setMonthPrice: PropTypes.func,
  goal: PropTypes.string,
  monthPrice: PropTypes.number,
  goalPrice: PropTypes.number,
  handleDelete: PropTypes.func,
  goals: PropTypes.object,
  listItems: PropTypes.func,
  _list: PropTypes.array,
};

export default GoalListGroup;

const ComponentContain = styled.div`
  position: relative;
  counter-increment: list;
  padding: 2rem 2rem 1rem;
  box-shadow: 0.05rem 0.05rem 1.5rem rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: white;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 30px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border-bottom: 12px solid #aac4ff;
  /* border: 0px solid #aac4ff; */
  border-radius: 5px;
  /* background: gradient(#ffffff, #aac4ff); */
  .ComponentContain::hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }

  .trashicon {
    margin-left: 500px;
  }
  .p {
    font-size: 17px;
    font-weight: 500;
  }
  .smallP {
    margin-bottom: 5px;
    font-weight: 500;
    text-align: left;
    color: gray;
  }

  .SettingInput {
    text-align: center;
    background-color: transparent;
    width: 100%;
    height: 30px;
    font-size: 16px;
    border: none;
    border-bottom: solid 2px #aac4ff;
    margin: 10px 20px 0px 5px;
    color: grey;
    font-weight: 500;
    &:focus {
      outline: none;
      border-color: none;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
    }
  }

  .li {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }

  /* 목표치 계산 */
  .h2 {
    display: flex;
    justify-content: center;
  }
  .Font {
    margin: 30px 0 20px 0;
    color: #aac4ff;
  }
  .Hilight {
    color: #ff6f6f;
  }
`;

// const Header = styled.h3`
//   margin-top: 30px;
// `;

const Header = styled.h2`
  margin: 30px 0px 0px 20px;
  color: #aac4ff;
  width: 20%;
`;
