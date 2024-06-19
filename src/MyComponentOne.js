import React from "react";

const MyComponentOne = () => {
  // const data = ['banana', 'mango', 'apple'];
  const data = 'banana';

  return (
    <>
      {data.map(val => <p key={val}>{val}</p>)}
    </>
  );
}

export default MyComponentOne;