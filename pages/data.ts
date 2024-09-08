import useSWR from "swr";

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
export const useData = <T>(url: string) => {
  const { data, error } = useSWR<T>(url, fetcher);
  return [data, error];
};
