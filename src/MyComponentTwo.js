import React from "react";

const MyComponentTwo = () => {
  const data = ['banana', 'mango', 'apple'];

  return (
    <>
      {data.map(val => <p key={val}>{val}</p>)}
    </>
  );
}

export default MyComponentTwo;