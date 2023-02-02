import styled from '@emotion/styled';
import { getURL_GOALS, getWITH_TOKEN } from '../store/urlStore';
import axios from 'axios';
import GoalSetting from '../components/goal/GoalSetting';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Box, Button } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import {
  MODAL_TYPE_SEARCH,
  setModalOpen,
  setModalType,
} from '../reducer/modalSlice';
import { setGoalCreateInit } from '../reducer/goalCreateSlice';
import { getERROR_TEXT } from '../helper/axiosHelper';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';

const GoalCreatePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goalData = useSelector((state) => state.goalCreate);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(setGoalCreateInit());
  }, []);

  const goalPost = () => {
    const postdata = {
      goalName: goalData.data.goalName,
      price: goalData.data.price,
      monthlyPayment: goalData.data.monthlyPayment,
      url: goalData.data.url,
    };
    // console.log(postdata.url);

    axios
      .post(getURL_GOALS(), postdata, getWITH_TOKEN())
      .then(() => {
        Swal.fire({
          text: '목표가 등록되었어요!',
          icon: 'success',
        });
        setGoalCreateInit();
        navigate('/goalList');
      })
      .catch((error) => {
        const { message } = error;
        enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
          variant: 'error',
        });
      });
  };

  const handleOpenSearchModal = () => {
    dispatch(setModalType(MODAL_TYPE_SEARCH));
    dispatch(setModalOpen());
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
      <Box width="100%" mr={18} display="flex" justifyContent="flex-end">
        <Button
          onClick={handleOpenSearchModal}
          variant="outlined"
          startIcon={<SearchTwoToneIcon />}
        >
          물품 검색
        </Button>
      </Box>
      <GoalSetting goalPost={goalPost} />
    </CreatePage>
  );
};

export default GoalCreatePage;

const GuideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  height: auto;
  text-align: left;
  border-top: 5px solid #aac4ff;
  border-bottom: 5px solid #aac4ff;
  margin: 50px 0 50px;
  color: grey;
  .TextHeader {
    text-align: center;
    color: #aac4ff;
    width: 100%;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
