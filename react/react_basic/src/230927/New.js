import { useParams, useSearchParams } from "react-router-dom";

export default function New() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  console.log(searchParams.get("name"));
  console.log("파람", params);
  console.log();
  return (
    <div>
      <div>학생의 이름은 : New</div>
      <div>실제 이름은 : {searchParams.get("name")}</div>
    </div>
  );
}
