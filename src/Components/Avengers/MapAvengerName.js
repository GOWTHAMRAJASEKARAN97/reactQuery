import { Link } from "react-router-dom";
import { useAvengers } from "./CustomQueries/useAvengers";

export const MapAvengerName = () => {
  const { data } = useAvengers();

  return (
    <>
      {data ? (
        <>
          <h3>Names</h3>
        </>
      ) : (
        <></>
      )}
      {data?.data.map((avenger) => {
        return (
          <li key={avenger.name}>
            * <Link to={`/Avengers/${avenger.id}`}> {avenger.name}</Link>
          </li>
        );
      })}
    </>
  );
};
