function Test() {
  const name = "이상녕";
  const my_style = {
    backgroundColor: "blue",
    color: "orange",
    fontSize: "40px",
    padding: "12px",
  };
  return (
    <>
      <div style={my_style}>{name}</div>
    </>
  );
}
export default Test;
