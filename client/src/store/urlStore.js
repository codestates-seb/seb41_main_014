const TYPE_DEPLOY = false;
const BASE = TYPE_DEPLOY ? process.env.REACT_APP_BASEURL : '';

//회원
const USER_SIGNUP = process.env.REACT_APP_EP_SIGNUP;
const USER_SIGNOUT = process.env.REACT_APP_EP_SIGNOUT;
const USER_LOGIN = process.env.REACT_APP_EP_LOGIN;
const USER_USER = process.env.REACT_APP_EP_USER;
const USER_EDIT = process.env.REACT_APP_EP_USER_EDIT;

//게시물
const POSTS_CREATE = process.env.REACT_APP_EP_POSTS_CREATE;
const POSTS_LIST = process.env.REACT_APP_EP_POSTS_LIST;
const POSTS_DETAIL = process.env.REACT_APP_EP_POSTS_DETAIL;
const POSTS_EDIT = process.env.REACT_APP_EP_POSTS_EDIT;
const POSTS_DELETE = process.env.REACT_APP_EP_POSTS_DELETE;
const POSTS_LIKES = process.env.REACT_APP_EP_POSTS_LIKES;
const POSTS_UNLIKES = process.env.REACT_APP_EP_POSTS_UNLIKES;

//댓글
const COMMENT_PARENT = process.env.REACT_APP_EP_COMMENT_CREATE;
const COMMENT_CHILD = process.env.REACT_APP_EP_COMMENT;
// const COMMENT_CREATE = process.env.REACT_APP_EP_COMMENT_CREATE;
// const COMMENT_EDIT = process.env.REACT_APP_EP_COMMENT_EDIT;
// const COMMENT_DELETE = process.env.REACT_APP_EP_COMMENT_DELETE;
const COMMENT_LIKES = process.env.REACT_APP_EP_COMMENT_LIKES;
const COMMENT_UNLIKES = process.env.REACT_APP_EP_COMMENT_UNLIKES;

//http://localhost:8080/user/signup
export const getUSER_SIGNUP = () => `${BASE}${USER_SIGNUP}`;

//http://152.67.220.223:8080/user/signout/5
export const getUSER_SIGNOUT = ({ userId = -1 }) =>
  `${BASE}${USER_SIGNOUT}/${userId}`;

//http://localhost:8080/user/login
export const getUSER_LOGIN = () => `${BASE}${USER_LOGIN}`;

//http://localhost:8080/user/1
export const getUSER_USER = () => `${BASE}${USER_USER}`;

//
export const getUSER_EDIT = ({ userId = -1 }) =>
  `${BASE}${USER_EDIT}/${userId}`;

//http://localhost:8080/board/posts
export const getPOSTS_CREATE = () => `${BASE}${POSTS_CREATE}`;

//http://localhost:8080/board/posts?page=1&size=3
export const getPOSTS_LIST = () => `${BASE}${POSTS_LIST}`;

//http://localhost:8080/board/posts/1
export const getPOSTS_DETAIL = ({ postId = -1 }) =>
  `${BASE}${POSTS_DETAIL}/${postId}`;

// http://localhost:8080/board/posts/1
export const getPOSTS_EDIT = ({ postId = -1 }) =>
  `${BASE}${POSTS_EDIT}/${postId}`;

//http://152.67.220.223:8080/board/posts/1
export const getPOSTS_DELETE = ({ postId = -1 }) =>
  `${BASE}${POSTS_DELETE}/${postId}`;

// http://localhost:8080/board/posts/1/postLikes
export const getPOSTS_LIKES = ({ postId = -1 }) =>
  `${getPOSTS_DETAIL({ postId: postId })}${POSTS_LIKES}`;

// http://localhost:8080/board/posts/2/postUnLikes
export const getPOSTS_UNLIKES = ({ postId = -1 }) =>
  `${getPOSTS_DETAIL({ postId: postId })}${POSTS_UNLIKES}`;

// http://localhost:8080/board/posts/1/comment
export const getCOMMENT_CREATE = ({ postId = -1 }) =>
  `${BASE}${COMMENT_PARENT}/${postId}${COMMENT_CHILD}`;

// http://localhost:8080/board/posts/1/comment/1
export const getCOMMENT_EDIT = ({ postId = -1, commentId = -1 }) =>
  `${getCOMMENT_CREATE({ postId: postId })}/${commentId}`;

// http://localhost:8080/board/posts/1/comment/1
export const getCOMMENT_DELETE = ({ postId = -1, commentId = -1 }) =>
  `${getCOMMENT_EDIT({ postId: postId, commentId: commentId })}`;

// http://localhost:8080/board/posts/2/comment/1/commentLikes
export const getCOMMENT_LIKES = ({ postId = -1, commentId = -1 }) =>
  `${getCOMMENT_EDIT({
    postId: postId,
    commentId: commentId,
  })}${COMMENT_LIKES}`;

// http://localhost:8080/board/posts/1/comment/1/commentUnLikes
export const getCOMMENT_UNLIKES = ({ postId = -1, commentId = -1 }) =>
  `${getCOMMENT_EDIT({
    postId: postId,
    commentId: commentId,
  })}${COMMENT_UNLIKES}`;
