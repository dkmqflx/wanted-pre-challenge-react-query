import { AxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { useMutate } from '@hooks/useRequest';
import { todoType, todoInputType } from '@type/todo.types';
import TodoService from '@service/todo.service';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutate<todoType, AxiosError, todoInputType>(
    ({ title, content }) => TodoService.createTodo(title, content),
    {
      onSuccess: (data) => {
        console.log(queryClient.getQueryData(['todo-items']));
        queryClient.setQueryData(['todo-items'], (oldData: any) => {
          return [...oldData, data];
        });
      },
    }
  );
};
