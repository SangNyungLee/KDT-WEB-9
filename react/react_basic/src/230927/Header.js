import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  //useNavigate() : Link 컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
  const navi = useNavigate();
  const onClick = () => {
    navi("/redirect");
  };

  //Link : 유저가 직접 클릭
  return (
    <div>
      <ul>
        <li>
          <Link to="/">호옴</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
        <li>
          <Link to="/user">유저</Link>
        </li>
        <li>
          <button onClick={onClick}>리다이렉트👨🏿‍🦰</button>
        </li>
      </ul>
    </div>
  );
}
