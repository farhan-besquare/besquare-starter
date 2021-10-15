function AnotherComponent(props) {
  return (
    <>
      {props.array.map((item, id) => {
        return <h1 key={id}>{item}</h1>;
      })}
    </>
  );
}

export default AnotherComponent;
