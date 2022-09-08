import { useQuery ,useQueryClient} from "react-query";
import { FetchRequest } from "../../Fetching/Axios.util";

const FetchAvenger = (avengerId) => {
    return FetchRequest({
      url: `/Avengers/${avengerId}`,
      method: "get",
    });
  };

  
  const useAvenger = (avengerId) => {
    const queryClient = useQueryClient()
    return useQuery(
        ["Avengers", avengerId],
    
        () => FetchAvenger(avengerId),
        {
          initialData: () => {
            const avenger = queryClient
              .getQueryData("Avengers")
              ?.data?.find((avenger) => avenger.id === parseInt(avengerId));
    
            if (avenger) {
              return { data: avenger };
            } else {
              return undefined;
            }
          },
        }
      );
    

  }
  
  export default useAvenger