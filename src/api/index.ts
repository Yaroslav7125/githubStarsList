import { RepositoryItem } from "./types";

export const fetchRepos = async (
  pageSize: number,
  page: number = 1
): Promise<{ total_count: number; items: RepositoryItem[] }> => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=language:Typescript&sort=stars&page=${page}&per_page=${pageSize}`
  );
  return response.json();
};
