import { Repository } from "./Repository";
import { useRepositoriesStore } from "../store";

export const RepositoriesList = () => {
  const data = useRepositoriesStore((store) => store.items);

  return (
    <div className="flex flex-col gap-3">
      {data.map((repoItem) => (
        <Repository
          key={repoItem.id}
          name={repoItem.name}
          starCount={repoItem.stargazers_count}
          href={repoItem.html_url}
          description={repoItem.description}
        />
      ))}
    </div>
  );
};
