import { Loader } from "lucide-react";
import "./App.css";
import { RepositoriesList } from "./components/RepositoriesList";
import { useRepositoriesStore } from "./store";

useRepositoriesStore.getState().fetchData();

function App() {
  const isLoading = useRepositoriesStore((store) => store.loading);
  const page = useRepositoriesStore((store) => store.page);
  const maxPageCount = useRepositoriesStore((store) => store.pageCount);
  const fetchData = useRepositoriesStore((store) => store.fetchData);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="m-auto p-2">{page}</h1>
      {isLoading ? <Loader className="m-auto" /> : <RepositoriesList />}
      <div className="flex justify-between p-2">
        <button onClick={() => fetchData(page - 1)} disabled={page == 1}>
          Previous
        </button>
        <button
          onClick={() => fetchData(page + 1)}
          disabled={
            (!!maxPageCount && page === maxPageCount) || maxPageCount === 0
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
