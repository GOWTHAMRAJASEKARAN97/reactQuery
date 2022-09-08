
import { useState } from "react";
import { useQuery } from "react-query";
import { FetchSuitColors } from "./FetchSuitColors";


const DisplaySuitColors = () => {
  const [pagenumber, setPagenumber] = useState(1);
  const { isLoading, isError, data, error, isFetching } = useQuery(
    ["colors", pagenumber],
    () => FetchSuitColors(pagenumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        <h1>Available Suit Colors</h1>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h4>
                {color.id}._{color.label}
              </h4>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setPagenumber((page) => page - 1)}
        disabled={pagenumber === 1}
      >
        Prev
      </button>
      <button
        onClick={() => setPagenumber((page) => page + 1)}
        disabled={pagenumber === 3}
      >
        Next
      </button>
      <div>{isFetching && "loading"}</div>
    </>
  );
};

export default DisplaySuitColors;
