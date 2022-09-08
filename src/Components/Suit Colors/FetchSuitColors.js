import { FetchRequest } from "../Fetching/Axios.util";

export const  FetchSuitColors = (pageNumber) => {
  console.log(pageNumber);
    return FetchRequest({
      url: `/Colors?_limit=2&_page=${pageNumber}`,
      method: "get",
    });
  };