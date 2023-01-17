import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import { getACCESS_TOKEN } from '../helper/cookieHelper';
import axios from 'axios';

const StyledButton = styled(Button)`
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(1)};
`;

const Main = () => {
  console.log(getACCESS_TOKEN());
  /**
   * goalCreate 홍
   */
  const handleTest = () => {
    axios
      .post(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/1',
        {
          goalName: '골이름',
          price: '10000',
          monthlyPayment: '2',
        } /* ,  //TODO 참고 https://junglast.com/blog/http-ajax-withcredential
        쿼리파라메타가 아닌 경우, option -> params: {key:value} 추가
        { headers: { withCredentials: true } }*/
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
        /* 
            {
              id: 2,
              memberId: 0,
              url: null,
              goalName: "초콜릿",
              price: 500000,
              monthlyPayment: 100000,
              paymentStart: null
              period: 5
              status: PROGRESS
              createdAt: 날자정보
              modifiedAt: 날짜
            }
        */
      })
      .catch((error) => {
        console.log(error);

        //TODO 에러처리 error에서 넘어오는 정보확인하고 번호만 짤라서
        /*         let errorText;
        const { message } = error;
        const code = Number(message.slice(-3));
        switch (code) {
          case 400:
            errorText = 'Bad request';
            break;
          case 401:
            errorText = 'Unauthorized';
            break;
          case 403:
            errorText = 'Forbidden';
            break;
          case 404:
            errorText = 'Data not found';
            break;
          case 405:
            errorText = 'Method not allowed';
            break;
          case 415:
            errorText = 'Unsupported media type';
            break;
          case 429:
            errorText = 'Rate limit exceeded';
            break;
          case 500:
            errorText = 'Internal server error';
            break;
          case 502:
            errorText = 'Bad gateway';
            break;
          case 503:
            errorText = 'Service unavailable';
            break;
          case 504:
            errorText = 'Gateway timeout';
            break;
          default:
            errorText = error;
        }
        return alert(errorText); */
      });
  };
  const handleTest2 = () => {
    axios
      .post(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/savings',
        {
          monthlySavings: 10000,
          saveTrm: '12',
          totalSavings: 10000,
          finCoNoList: ['0010002'],
        } /*//TODO 참고 https://junglast.com/blog/http-ajax-withcredential
        쿼리파라메타가 아닌 경우, option -> params: {key:value} 추가*/,
        {
          headers: { withCredentials: true },
          params: {
            page: 1,
            size: 10,
          },
        }
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);

        //TODO 에러처리 error에서 넘어오는 정보확인하고 번호만 짤라서
        /*         let errorText;
        const { message } = error;
        const code = Number(message.slice(-3));
        switch (code) {
          case 400:
            errorText = 'Bad request';
            break;
          case 401:
            errorText = 'Unauthorized';
            break;
          case 403:
            errorText = 'Forbidden';
            break;
          case 404:
            errorText = 'Data not found';
            break;
          case 405:
            errorText = 'Method not allowed';
            break;
          case 415:
            errorText = 'Unsupported media type';
            break;
          case 429:
            errorText = 'Rate limit exceeded';
            break;
          case 500:
            errorText = 'Internal server error';
            break;
          case 502:
            errorText = 'Bad gateway';
            break;
          case 503:
            errorText = 'Service unavailable';
            break;
          case 504:
            errorText = 'Gateway timeout';
            break;
          default:
            errorText = error;
        }
        return alert(errorText); */
      });
  };
  return (
    <>
      <StyledButton variant="contained" onClick={handleTest}>
        목표등록
      </StyledButton>
      <StyledButton variant="contained" onClick={handleTest2}>
        적금
      </StyledButton>
    </>
  );
};

export default Main;
