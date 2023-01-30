import styled from '@emotion/styled';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  // ROUTE_PATH_GOAL_EDIT,
  ROUTE_PATH_GOAL_LIST,
} from '../store/routerStore';
import { getURL_GOALS, getWITH_TOKEN } from '../store/urlStore';
import axios from 'axios';
import { useState } from 'react';
import { TextField, Button, Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import noimage from '../asset/images/noimage.png';
import Swal from 'sweetalert2';
import { getERROR_TEXT } from '../helper/axiosHelper';
import { useSnackbar } from 'notistack';

const GoalDetail = () => {
  const navigate = useNavigate();
  // GoalListGroup에서 받은 props
  const location = useLocation();
  const detailData = location.state.data;

  // 날짜 변환 =>  뭐가 다른거지? => 일단 T 제외
  const date = new Date(detailData.createdAt);
  const createDate = date.toISOString().replace('T', ' ').substring(0, 19);
  const { enqueueSnackbar } = useSnackbar();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #d2daff',
    boxShadow: 24,
    p: 4,
  };

  const goalID = detailData.id;
  const goalDelete = () => {
    Swal.fire({
      title: '정말로 삭제하시겠습니까?',
      text: '아직 달성하지 못했을 수도 있어요!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '네, 삭제할래요!',
    }).then((result) => {
      axios
        .delete(getURL_GOALS(goalID), getWITH_TOKEN())
        .then(() => {
          navigate('/goalList');
        })
        .catch((error) => {
          const { message } = error;
          enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
            variant: 'error',
          });
        });
      if (result.isConfirmed) {
        Swal.fire('삭제되었어요.', 'See You Again!', 'success');
      }
    });
  };

  const [goal, setGoal] = useState(detailData.goalName); // 수기 목표 이름
  const [goalPrice, setGoalPrice] = useState(detailData.price); // 수기 가격
  const [monthPrice, setMonthPrice] = useState(detailData.monthlyPayment); // 수기 한 달 입금

  const goalPatch = async () => {
    const patchdata = {
      goalName: goal,
      price: goalPrice,
      monthlyPayment: monthPrice,
    };
    axios
      .patch(getURL_GOALS(goalID), patchdata, getWITH_TOKEN())
      .then(() => {
        Swal.fire({
          text: '목표가 수정되었어요!',
          icon: 'success',
        });
        navigate('/goalList');
      })
      .catch((error) => {
        const { message } = error;
        enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
          variant: 'error',
        });
      });
  };

  return (
    <>
      <GDetailPage>
        <h2 style={{ marginTop: '30px' }}>✧ 상세 위시 정보 ✧</h2>
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
            <img
              src={
                detailData.url === null ||
                detailData.url === 'null' ||
                !detailData.url ||
                detailData.url === ''
                  ? noimage
                  : detailData.url
              }
              alt="no_image"
              style={{ width: '300px' }}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Title> 나의 목표&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              defaultValue={detailData.goalName}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Title>목표 금액(원)</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              defaultValue={detailData.price}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Title>월 저축액(원)</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              defaultValue={detailData.monthlyPayment}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Title>기 &nbsp;&nbsp;&nbsp;&nbsp;간(개월)</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              defaultValue={Math.ceil(
                detailData.price / detailData.monthlyPayment
              )}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Title>생성 날짜&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Title>
            <TextField
              className="textField"
              id="standard-read-only-input"
              defaultValue={createDate}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            {
              <Button>
                <Button className="postButton" onClick={handleOpen}>
                  EDIT
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <h2 style={{ textDecoration: 'none', padding: '24px' }}>
                      목표 수정
                    </h2>
                    <form>
                      <TextField
                        id="outlined-helperText"
                        label="목표 이름"
                        variant="outlined"
                        defaultValue={detailData.goalName}
                        onChange={(e) => setGoal(e.target.value)}
                        style={{ margin: '24px', width: 300 }}
                      />
                      <br />
                      <TextField
                        id="outlined-helperText"
                        label="목표 금액"
                        variant="outlined"
                        defaultValue={detailData.price}
                        onChange={(e) => setGoalPrice(e.target.value)}
                        style={{ margin: '24px', width: 300 }}
                      />
                      <br />
                      <TextField
                        id="outlined-helperText"
                        label="월 입금액"
                        variant="outlined"
                        defaultValue={detailData.monthlyPayment}
                        onChange={(e) => setMonthPrice(e.target.value)}
                        style={{ margin: '24px', width: 300 }}
                      />
                      <br />
                      <Button
                        style={{
                          padding: '24px',
                          textAlign: 'center',
                          marginRight: '10px',
                        }}
                        onClick={goalPatch}
                      >
                        CONFIRM
                      </Button>
                    </form>
                  </Box>
                </Modal>
              </Button>
            }
            {
              <Button className="deleteButton" onClick={goalDelete}>
                DELETE
              </Button>
            }
          </div>
        </GDetail>
      </GDetailPage>
    </>
  );
};

export default GoalDetail;

GoalDetail.propTypes = {
  goal: PropTypes.string,
  goalPrice: PropTypes.number,
  monthPrice: PropTypes.number,
  setGoal: PropTypes.string,
  setGoalPrice: PropTypes.number,
  setMonthPrice: PropTypes.number,
};

const GDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GDetail = styled.div`
  /* 여기서 width를 100% 나 max-width를 설정할시 박스가 찌그러지는데 왜그러는건지 모르곘어서 일단 600 */
  width: 600px;
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
    width: 150px;
    height: 50px;
    &:hover {
      outline: none;
      border-color: #aac4ff;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
    }
  }
  .deleteButton {
    background-color: #ff6f6f;
    margin: 35px 0px 30px 0px;
    font-size: 20px;
    color: white;
    width: 150px;
    height: 50px;
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
