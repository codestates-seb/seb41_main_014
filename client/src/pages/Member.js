import { useState, useEffect } from 'react';
import {
  Container,
  styled,
  Divider,
  Button,
  Modal,
  Box,
  TextField,
  CircularProgress,
  Typography,
} from '@mui/material';
import axios from 'axios';
import empty from '../asset/images/no_data.png';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH_BASE } from '../store/routerStore';
import {
  URL_MEMBER_LOGOUT,
  URL_MEMBER,
  getWITH_TOKEN,
  getURL_GOALS,
} from '../store/urlStore';
import wish from '../asset/images/wish_list.png';
import { useSnackbar } from 'notistack';
import { getERROR_TEXT } from '../helper/axiosHelper';
import {
  getALIVE,
  getUSER_INFORMATION,
  setLogout,
} from '../helper/cookieHelper';

const MemberContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 60vh;
  margin-top: 8px;
  background-color: ${(props) => props.theme.colors.white};
  .NotLogin {
    margin-top: 20vh;
    text-align: center;
    height: 60%;
    div {
      margin-top: 24px;
      font-size: ${(props) => props.theme.fontSizes.xxxl};
    }
  }
`;

const InfoContainer = styled(Container)`
  display: flex;
  flex: 1;
  .userImage {
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
      height: fit-content;
      border-radius: 8px;
      margin-top: 20%;
      margin-bottom: 10%;
      border: 2px solid ${(props) => props.theme.colors.mainLight};
    }
  }
  .userInfo {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .userButton {
    text-align: end;
  }
  .userName {
    margin-top: 15%;
    font-size: ${(props) => props.theme.fontSizes.xxxl};
    font-weight: ${(props) => props.theme.fontWeight.medium};
  }
  .userEmail {
    margin-top: 8px;
    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: 200;
  }
`;

const SummaryContainer = styled(Container)`
  font-size: 14px;
  .noData {
    border: 2px solid ${(props) => props.theme.colors.mainHeavy};
    border-radius: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding-bottom: 8px;
    width: 100%;
    height: fit-content;
    text-align: center;
    img {
      width: 25%;
    }
  }
  .Data {
    border: 2px solid ${(props) => props.theme.colors.mainHeavy};
    border-radius: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding-bottom: 8px;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 4px;
    .oneData {
      border: 2px solid ${(props) => props.theme.colors.mainHeavy};
      border-radius: 4px;
      justify-content: center;
      text-align: center;
      width: 20%;
      margin: 4px;
      margin-top: 8px;
      .dataName {
        margin-top: 4px;
      }
      img {
        width: 80%;
        border-radius: 4px;
        margin-top: 4px;
      }
    }
    .excessive {
      font-size: 18px;
      margin: 4px;
      padding-top: 8%;
    }
  }
  h3 {
    margin-top: 8px;
  }
  flex: 1;
`;

const MemberDivider = styled(Divider)`
  height: 1%;
  background-color: ${(props) => props.theme.colors.mainHeavy};
  margin-top: 4px;
`;

const EditButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.mainMiddleLight};
  width: 10%;
  margin-right: 4px;
`;

const DeleteButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.mainLight};
  width: 10%;
`;

const editStyle = {
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

const deleteStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: 'background.paper',
  border: '2px solid #d2daff',
  boxShadow: 24,
  p: 4,
};

const Member = () => {
  const navigate = useNavigate();
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [list, setList] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const userInfo = getUSER_INFORMATION();

  const changeEditHandler = () => {
    setEditOpen(!editOpen);
  };

  const changeDeleteHandler = () => {
    setDeleteOpen(!deleteOpen);
  };

  const deleteHandler = () => {
    axios
      .delete(URL_MEMBER, getWITH_TOKEN())
      .then(() => {
        //TODO
      })
      .catch((error) => {
        const { message } = error;
        enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
          variant: 'error',
        });
      });
    setLogout();
    navigate(ROUTE_PATH_BASE);
  };

  const logoutHandler = () => {
    axios
      .delete(URL_MEMBER_LOGOUT, getWITH_TOKEN())
      .then(() => {
        //TODO
      })
      .catch((error) => {
        const { message } = error;
        enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
          variant: 'error',
        });
      });
    setLogout();
    navigate(ROUTE_PATH_BASE);
  };

  useEffect(() => {
    const goalGet = async () => {
      axios
        .get(getURL_GOALS(), getWITH_TOKEN())
        .then((response) => {
          const { data } = response;
          setList(data.data);
        })
        .catch((error) => {
          const { message } = error;
          enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
            variant: 'error',
          });
        });
    };
    goalGet();
  }, []);

  return (
    <>
      {getALIVE() && (
        <MemberContainer>
          <InfoContainer>
            <div className="userImage">
              <img src={userInfo.picture} alt="유저프로필" />
            </div>
            <div className="userInfo">
              <div className="userButton">
                <EditButton onClick={changeEditHandler}>EDIT</EditButton>
                <Modal
                  open={editOpen}
                  onClose={changeEditHandler}
                  aria-labelledby="회원정보 수정"
                >
                  <Box sx={editStyle}>
                    <h2 style={{ textDecoration: 'none', padding: '24px' }}>
                      회원정보 수정
                    </h2>
                    <form>
                      <TextField
                        id="outlined-helperText"
                        label="이름"
                        variant="outlined"
                        defaultValue={userInfo.name}
                        style={{ margin: '24px', width: 300 }}
                      />
                      <br />
                      <TextField
                        id="outlined-helperText"
                        label="이메일"
                        variant="outlined"
                        defaultValue={userInfo.email}
                        style={{ margin: '24px', width: 300 }}
                      />
                      <br />
                      <Button style={{ padding: '24px', textAlign: 'center' }}>
                        CONFIRM
                      </Button>
                    </form>
                  </Box>
                </Modal>
                <DeleteButton onClick={changeDeleteHandler}>
                  DELETE
                </DeleteButton>
                <Modal
                  open={deleteOpen}
                  onClose={changeDeleteHandler}
                  aria-labelledby="삭제 확인"
                >
                  <Box sx={deleteStyle}>
                    <Typography
                      sx={{ mt: 2, fontSize: '2rem' }}
                      style={{ textDecoration: 'none', margin: '12px' }}
                    >
                      회원 정보를 삭제하시겠습니까?
                    </Typography>
                    <Button
                      onClick={deleteHandler}
                      style={{
                        backgroundColor: '#eef1ff',
                        textDecoration: 'none',
                        margin: '12px',
                        marginTop: '40px',
                      }}
                    >
                      CONFIRM
                    </Button>
                  </Box>
                </Modal>
              </div>
              <div className="userName">{userInfo.name}</div>
              <div className="userEmail">{userInfo.email}</div>
            </div>
          </InfoContainer>
          <MemberDivider />
          <SummaryContainer>
            <h3>MY WISHLIST</h3>
            <div className="Data">
              {list.length !== 0 &&
                list.length <= 5 &&
                list.map((item, index) => {
                  return (
                    <div className="oneData" key={index}>
                      <div className="dataName">{item.goalName}</div>
                      <img
                        src={item.url ? item.url : wish}
                        alt={item.goalName}
                      />
                    </div>
                  );
                })}
              {list.length > 5 &&
                list
                  .map((item, index) => {
                    return (
                      <div className="oneData" key={index}>
                        <div className="dataName">{item.goalName}</div>
                        <img
                          src={item.url ? item.url : wish}
                          alt={item.goalName}
                        />
                      </div>
                    );
                  })
                  .slice(0, 5)}
              {list.length > 5 && (
                <div className="excessive">+{list.length - 5}</div>
              )}
              {list.length === 0 && (
                <div className="noData">
                  <img src={empty} alt="빈데이터" />
                  <h4>희망 물품이 없어요</h4>
                </div>
              )}
            </div>
          </SummaryContainer>
          <Button onClick={logoutHandler}>LOGOUT</Button>
        </MemberContainer>
      )}
      {!getALIVE() && (
        <MemberContainer>
          <div className="NotLogin">
            <CircularProgress />
            <div>로그인을 해주세요 !</div>
          </div>
        </MemberContainer>
      )}
    </>
  );
};

export default Member;
