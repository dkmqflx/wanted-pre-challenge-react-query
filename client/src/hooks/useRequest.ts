import { useMutation, useQuery, QueryKey } from '@tanstack/react-query';

type requestOptionType<TData = unknown, TError = unknown> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
};

type mutateOptionType<TData = unknown, TError = unknown> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
};

export const useRequest = <TError = unknown, TData = unknown>(
  key: QueryKey,
  request: () => TData | Promise<TData>,
  option?: requestOptionType<TData, TError>
) => {
  return useQuery(key, request, { ...option });
};

export const useMutate = <
  TData = unknown,
  TError = unknown,
  TVariables = unknown
>(
  mutationFn: (data: TVariables) => Promise<TData>,
  option?: mutateOptionType<TData, TError>
) => {
  return useMutation(mutationFn, { ...option });
};
