import { QueryClientProvider, QueryClient } from "react-query";
import {ReactQueryDevtools} from'react-query/devtools'
import Router from "./Components/Routers/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router/>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      </QueryClientProvider>
    </>
  );
}

export default App;
