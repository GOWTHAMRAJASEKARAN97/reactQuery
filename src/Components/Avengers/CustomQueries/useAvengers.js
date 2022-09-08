import { useQuery } from "react-query";
import { FetchRequest } from "../../Fetching/Axios.util";

const FetchAvengers =()=>{
    return FetchRequest ({
        url: `/Avengers`,
        method: "get",
      })
}


export const useAvengers = () => {
  return useQuery("Avengers", ()=>FetchAvengers(),{
    refetchOnMount:false,
    refetchOnWindowFocus:false,
    enabled:false,
    
  });
};
