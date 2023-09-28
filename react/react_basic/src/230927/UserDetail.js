import { useParams, Link, Outlet, useSearchParams } from "react-router-dom";
import { users } from "./User";
export default function UserDetail() {
  //Route에 /user/:userid
  const { userid } = useParams();
  return (
    <div>
      <div>
        사용자 {userid}는 {users[Number(userid) - 1].name}
      </div>
      <Link to="comment">comment</Link>
      <Outlet context={{ comment: users[Number(userid) - 1].comment }} />
    </div>
  );
}
