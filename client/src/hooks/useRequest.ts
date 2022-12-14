import { useMutation, useQuery, QueryKey } from '@tanstack/react-query';

type requestOptionType<TData, TError> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
  enabled?: boolean;
};

type mutateOptionType<TData, TError, TVariables> = {
  onSuccess?: (data: TData, variables?: TVariables) => void;
  onError?: (error: TError) => void;
};

export const useRequest = <TError, TData>(
  key: QueryKey,
  request: () => TData | Promise<TData>,
  option?: requestOptionType<TData, TError>
) => {
  return useQuery(key, request, { ...option });
};

export const useMutate = <TData, TError, TVariables>(
  mutationFn: (data: TVariables) => Promise<TData>,
  option?: mutateOptionType<TData, TError, TVariables>
) => {
  return useMutation(mutationFn, { ...option });
};
