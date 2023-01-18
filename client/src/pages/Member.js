import { useSelector } from 'react-redux';

const Member = () => {
  const userInfo = useSelector((state) => state.isLogin.userInfo);
  return (
    <>
      <div>{userInfo.email}</div>
      <div>{userInfo.id}</div>
      <div>{userInfo.name}</div>
      <img src={userInfo.picture} alt="유저프로필" />
    </>
  );
};

export default Member;
