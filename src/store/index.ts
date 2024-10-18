import { create } from "zustand";
import { RepositoryItem } from "../api/types";
import { fetchRepos } from "../api";

interface RepoStore {
  items: RepositoryItem[];
  page: number;
  fetchData: (page?: number) => void;
  loading: boolean;
  totalCount: number | null;
  pageSize: number;
  pageCount: number | null;
}

const DEFAULT_PAGE_SIZE = 30;

export const useRepositoriesStore = create<RepoStore>()((set, get) => ({
  items: [],
  page: 1,
  loading: false,
  totalCount: null,
  pageSize: DEFAULT_PAGE_SIZE,
  pageCount: null,
  fetchData: async (page: number = 1) => {
    const { pageSize, pageCount } = get();

    if (page !== 1) {
      if ((pageCount && page > pageCount) || pageCount === 0) return;
    }

    try {
      set(() => ({ loading: true }));
      const data = await fetchRepos(pageSize, page);
      const pageCount =
        data.total_count && Math.ceil(data.total_count / pageSize);
      set(() => ({
        items: data.items,
        page,
        pageCount,
        totalCount: data.total_count,
      }));
    } catch {
      alert("error by fetching");
    } finally {
      set(() => ({ loading: false }));
    }
  },
}));
