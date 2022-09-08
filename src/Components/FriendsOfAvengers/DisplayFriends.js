import { useInfiniteQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react";

const FetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/Friends?_limit=1&_page=${pageParam}`);
};
const DisplayFriends = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["Friends"], FetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        <h1>Guardians of Galaxy</h1>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group.data.map((friend) => (
                <h3 key={friend.id}>
                  {friend.id}.{friend.name}
                </h3>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};
export default DisplayFriends;
