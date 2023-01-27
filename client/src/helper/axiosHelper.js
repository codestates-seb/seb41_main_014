export const getErrorText = (code) => {
  let errorText;
  switch (code) {
    //'Bad request'
    case 400:
      errorText = 'Bad request';
      break;
    //Unauthorized
    case 401:
      errorText = 'Unauthorized';
      break;
    //Forbidden
    case 403:
      errorText = 'Forbidden';
      break;
    // Data not found
    case 404:
      errorText = 'Data not found';
      break;
    // Method not allowed
    case 405:
      errorText = 'Method not allowed';
      break;
    //Unsupported media type
    case 415:
      errorText = 'Unsupported media type';
      break;
    // Rate limit exceeded
    case 429:
      errorText = 'Rate limit exceeded';
      break;
    // Internal server error
    case 500:
      errorText = 'Internal server error';
      break;
    // Bad gateway
    case 502:
      errorText = 'Bad gateway';
      break;
    // Service unavailable
    case 503:
      errorText = 'Service unavailable';
      break;
    // Gateway timeout
    case 504:
      errorText = 'Gateway timeout';
      break;
    // unkown error
    default:
      errorText = 'unkown error';
  }
  return errorText;
};
