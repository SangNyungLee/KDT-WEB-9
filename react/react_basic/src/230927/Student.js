import { Link, useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  console.log("파람값", params);
  console.log("파람~", searchParams);
  return (
    <>
      <div>학생 이름은 ~입니다.</div>
      <Link to="/">
        <button>메인페이지로</button>
      </Link>
    </>
  );
}
