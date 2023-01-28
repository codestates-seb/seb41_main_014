import { useState, useEffect, Fragment } from 'react';
import styled from '@emotion/styled';
// import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
// import { ROUTE_PATH_GOAL_DETAIL } from '../../store/routerStore';
import PropTypes from 'prop-types';
// import { color } from '@mui/system';

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
              to={`/api/goals/${item.id}`}
              style={{ textDecoration: 'none', color: '#b1b2ff' }}
              state={{ data: item, goalId: item.id }}
            >
              <ComponentContain>
                <div style={{ display: 'flex' }}>
                  <Header>나의 목표: </Header>{' '}
                  <input
                    className="SettingInput"
                    defaultValue={item.goalName}
                  />
                </div>
                <div style={{ display: 'flex' }}>
                  <Header>목표 금액: </Header>{' '}
                  <input className="SettingInput" defaultValue={item.price} />
                </div>
                <div style={{ display: 'flex' }}>
                  <Header>월 납입금: </Header>{' '}
                  <input
                    className="SettingInput"
                    defaultValue={item.monthlyPayment}
                  />
                </div>
                <h2 className="Font">
                  목표치에 도달하기 까지{' '}
                  <span className="Hilight">
                    {Math.ceil(item.price / item.monthlyPayment)}개월
                  </span>{' '}
                  남았어요!
                </h2>
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
  display: flex;
  flex-direction: column;
  display: inline-flex;
  align-items: center;
  margin: 30px 0 30px;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  height: auto;
  border: 5px solid #aac4ff;
  border-radius: 5px;
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
    width: 400px;
    height: 30px;
    /* margin: px; */
    font-size: 16px;
    border: none;
    border-radius: 6px;
    border-bottom: solid 2px #b1b2ff;
    margin: 20px 30px 0px 5px;
    color: grey;
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

  /* 목표치 계산 폰트 */
  .Font {
    margin: 20px 0 20px 0;
    color: #b1b2ff;
  }
  .Hilight {
    color: #ff6f6f;
  }
`;

// const Header = styled.h3`
//   margin-top: 30px;
// `;

const Header = styled.h2`
  margin: 30px 20px 0px 20px;
`;
