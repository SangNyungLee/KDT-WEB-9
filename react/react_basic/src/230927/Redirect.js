import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Redirect() {
  const navi = useNavigate();

  useEffect(() => {
    navi("/user");
  }, []);
  return (
    <>
      <h1>리다이렉트👨🏿‍🦰</h1>
    </>
  );
}
