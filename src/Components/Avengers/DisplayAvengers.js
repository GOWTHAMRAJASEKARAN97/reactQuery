import AddAvengers from "./AddAvengers";
import { useAvengers } from "./CustomQueries/useAvengers";
import ErrorHandling from "./ErrorHandling";
import { MapAvengerName } from "./MapAvengerName";

const DisplayAvengers = () => {

  const{data,refetch}=useAvengers()
  return (
    <>
      <center>
        <h1>Avengers</h1>
        <ErrorHandling />
        <button onClick={refetch}>Fetch</button>
      </center>
      <AddAvengers/>
      {data? <MapAvengerName/>:<></>}
    </>
  );
};

export default DisplayAvengers;
