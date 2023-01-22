export const errorHandle = (code) => {
  let errorText;
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
  }
  return errorText;
};
