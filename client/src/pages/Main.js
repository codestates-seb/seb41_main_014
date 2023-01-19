import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';

const StyledButton = styled(Button)`
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(1)};
`;

const Main = () => {
  /**
   * goalCreate 홍
   */
  const create = () => {
    axios
      .post(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/1',
        {
          goalName: '감자',
          price: 10000,
          monthlyPayment: -1,
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
  const openapi = () => {
    axios
      .get(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/open-api/search',
        {
          params: {
            query: '만두',
          },
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
  const get = () => {
    axios
      .get(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/1'
        /* ,  //TODO 참고 https://junglast.com/blog/http-ajax-withcredential
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
  //patch 400error 230119 김태윤
  const edit = () => {
    axios
      .patch(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/1/11',
        {
          goalName: '수정감자',
          price: 99990000,
          monthlyPayment: 11100,
        }
        /* ,  //TODO 참고 https://junglast.com/blog/http-ajax-withcredential
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
  const readDetail = () => {
    axios
      .get(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/1/20'
        /* ,  //TODO 참고 https://junglast.com/blog/http-ajax-withcredential
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
  const deleteGoal = () => {
    axios
      .delete(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/goals/1/-1'
        /* ,  //TODO 참고 https://junglast.com/blog/http-ajax-withcredential
        쿼리파라메타가 아닌 경우, option -> params: {key:value} 추가
        { headers: { withCredentials: true } }*/
      )
      .then((response) => {
        const { data } = response;
        console.log(data);
        console.log('111111111111111111111111111111111111111111111');
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

  const fixedSaving = () => {
    axios
      .post(
        'http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/savings',
        {
          monthlySavings: 10000,
          saveTrm: 36,
          joinDeny: 3,
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
      <StyledButton variant="contained" onClick={create}>
        목표등록
      </StyledButton>
      <StyledButton variant="contained" onClick={openapi}>
        물품검색
      </StyledButton>
      <StyledButton variant="contained" onClick={get}>
        물품조회
      </StyledButton>
      <StyledButton variant="contained" onClick={readDetail}>
        물품상세조회
      </StyledButton>
      <StyledButton variant="contained" onClick={edit}>
        물품수정
      </StyledButton>
      <StyledButton variant="contained" onClick={deleteGoal}>
        물품삭제
      </StyledButton>
      <StyledButton variant="contained" onClick={fixedSaving}>
        적금
      </StyledButton>
    </>
  );
};

export default Main;
