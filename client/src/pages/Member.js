import { useState } from 'react';
import { useSelector } from 'react-redux';
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
import { getACCESS_TOKEN } from '../helper/cookieHelper';
import empty from '../asset/images/no_data.png';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH_BASE } from '../store/routerStore';

const MemberContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 60vh;
  margin-top: 8px;
  background-color: ${(props) => props.theme.colors.white};
  .NotLogin {
    margin-top: 20vh;
    text-align: center;
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
  div {
    border: 2px solid ${(props) => props.theme.colors.mainHeavy};
    border-radius: 4px;
    margin-top: 8px;
    width: 100%;
    height: 18vh;
    text-align: center;
    img {
      width: 25%;
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
  const userInfo = useSelector((state) => state.isLogin.userInfo);
  const isLogin = useSelector((state) => state.isLogin.isLogin);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const changeEditHandler = () => {
    setEditOpen(!editOpen);
  };

  const changeDeleteHandler = () => {
    setDeleteOpen(!deleteOpen);
  };

  const deleteHandler = () => {
    axios
      .delete(
        `http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/members`,
        {
          headers: {
            withCredentials: true,
            Authorization: getACCESS_TOKEN(),
          },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    navigate(ROUTE_PATH_BASE);
  };

  return (
    <>
      {isLogin && (
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
            <div>
              <img src={empty} alt="빈데이터" />
              <h4>희망 물품이 없어요</h4>
            </div>
          </SummaryContainer>
        </MemberContainer>
      )}
      {!isLogin && (
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
