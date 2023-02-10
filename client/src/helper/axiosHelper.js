export const getERROR_TEXT = (code) => {
  let errorText;
  switch (code) {
    //'Bad request'
    case 400:
      errorText = '잘못된 요청입니다.';
      break;
    //Unauthorized
    case 401:
      //TODO RefeshToken 재요청
      errorText = '인증되지 않았습니다.';
      break;
    //Forbidden
    case 403:
      errorText = '찾을 수 없습니다.';
      break;
    // Data not found
    case 404:
      errorText = '정보를 못찾았습니다.';
      break;
    // Method not allowed
    case 405:
      errorText = '허용되지않은 접근입니다.';
      break;
    //Unsupported media type
    case 415:
      errorText = '지원하지 않는 타입입니다.';
      break;
    // Rate limit exceeded
    case 429:
      errorText = '요청 시간이 지났습니다.';
      break;
    // Internal server error
    case 500:
      errorText = '서버가 폭발했습니다.';
      break;
    // Bad gateway
    case 502:
      errorText = '서버에 장애가 발생했습니다.';
      break;
    // Service unavailable
    case 503:
      errorText = '서버가 서비스를 거부합니다.';
      break;
    // Gateway timeout
    case 504:
      errorText = '서버가 응답을 하지 못합니다.';
      break;
    // unkown error
    default:
      errorText = '※ 알수없는 오류 ※';
  }
  return errorText;
};
