import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "./store";

export default function Login() {
  const login = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const loggin = () => {
    dispatch(loginAction.login());
  };
  const logout = () => {
    dispatch(loginAction.logout());
  };
  return (
    <>
      {login ? (
        <>
          <div>로그인했습니다.</div>
          <button onClick={logout}>로그아웃</button>
        </>
      ) : (
        <>
          <div>로그아웃하셨습니다.</div>
          <button onClick={loggin}>로그인</button>
        </>
      )}
    </>
  );
}
