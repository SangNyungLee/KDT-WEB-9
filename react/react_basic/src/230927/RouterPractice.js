import { Link, Outlet } from "react-router-dom";

export default function RouterPractice() {
  return (
    <>
      <Link to="/student">
        <h2>ReactRouter 실습</h2>
      </Link>
      <nav>
        <ul>
          <li style={{ margin: "4px" }}>
            <Link to="student/kdt">학생KDT</Link>
          </li>
          <li style={{ margin: "4px" }}>
            <Link to="codingon">코딩온</Link>
          </li>
          <li style={{ margin: "4px" }}>
            <Link to="new?name=kdt3rd">searchParams</Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </>
  );
}
