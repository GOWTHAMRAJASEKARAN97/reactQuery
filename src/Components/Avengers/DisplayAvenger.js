import React from "react";
import { useParams } from "react-router-dom";
import useAvenger from "./CustomQueries/useAvenger";

const DisplayAvenger = () => {
  const { avengerId } = useParams();
  const { isLoading, isError, data, error } = useAvenger(avengerId);
  if (isLoading) {
    return <h2>Details Loading ...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h3>Avenger Name : {data?.data.name} </h3>
      <h3>Avenger RealName : {data?.data.realName} </h3>
    </>
  );
};

export default DisplayAvenger;
