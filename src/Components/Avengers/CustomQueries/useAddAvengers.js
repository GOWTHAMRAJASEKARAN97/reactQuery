import { useMutation, useQueryClient } from "react-query";
import { FetchRequest } from "../../Fetching/Axios.util";

const addAvenger = (avenger) => {
  return FetchRequest({ url: "/Avengers", method: "post", data: avenger });
};

export const useAddAvengers = () => {
  const queryClient = useQueryClient();

  return useMutation(addAvenger, {
    onSuccess: (data) => {
      queryClient.setQueryData("Avengers", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
