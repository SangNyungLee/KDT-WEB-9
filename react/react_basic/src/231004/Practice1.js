import { useForm } from "react-hook-form";

export default function Practice1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (abc) => {
    console.log("onvalid", abc);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <label>이름: </label>
        <input
          type="text"
          {...register("name", { required: "이름은 필수항목입니다." })}
        />
        {/* {errors.name?.message} */}
        {errors.name && (
          <div style={{ color: "red" }}>{errors.name.message}</div>
        )}
        <br />
        <label>나이 : </label>
        <input
          {...register("age", {
            valueAsNumber: true,
            validate: (value) => value > 0 || "0이상만 입력해주세요",
          })}
        />
        {errors.age?.message}
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
