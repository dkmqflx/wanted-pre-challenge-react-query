import { useMutation } from '@tanstack/react-query';

type mutateOptionType<TData = unknown, TError = unknown> = {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
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
