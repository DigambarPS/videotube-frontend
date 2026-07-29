

export function useApiHandler(apiFunc, data = ['data']) {
  const { isLoading, isError, data, error } = useQuery(data, apiFunc);

  return { isLoading, isError, data, error };
}