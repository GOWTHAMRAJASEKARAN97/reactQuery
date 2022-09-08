import { useAvengers } from "./CustomQueries/useAvengers";

const ErrorHandling = ({ data }) => {
  const { isLoading, isError, isFetching, error } = useAvengers();
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isFetching) {
    return <h3>Fetching...</h3>;
  }
  if (isError) {
    return <h3>{error.message}</h3>;
  }
};

export default ErrorHandling;
