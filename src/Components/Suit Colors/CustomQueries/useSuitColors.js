import { useQuery } from "react-query";
import { FetchSuitColors } from "../FetchSuitColors";


export const useSuitColors = (pageNumber) => {
  return useQuery("Avengers", ()=>FetchSuitColors(pageNumber), {
    enabled: false,
    
  });
};
