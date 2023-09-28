import { Link, useSearchParams } from "react-router-dom";
export const users = [
  {
    id: 1,
    name: "길동",
    comment: [
      {
        text: "안녕하세욧!",
      },
    ],
  },
  {
    id: 2,
    name: "최길동",
    comment: [
      {
        text: "누구세요",
      },
    ],
  },
  {
    id: 3,
    name: "합장",
    comment: [
      {
        text: "🙏",
      },
    ],
  },
];
export default function User() {
  //searchParams는 쿼리스트링 값을 가져오는 것
  //setSearchParams는 쿼리스트링 값을 부여하는 것
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mode"));
  // setTimeout(() => {
  //   setSearchParams({ mode: "Light" });
  // }, 3000);
  return (
    <div>
      <ul>
        {users.map((value) => {
          return (
            <li key={value.id}>
              <Link to={`/user/${value.id}`}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
