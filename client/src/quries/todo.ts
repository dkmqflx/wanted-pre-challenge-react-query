import { AxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { useRequest, useMutate } from '@hooks/useRequest';
import { todoType, todoInputType } from '@type/todo.types';
import TodoService from '@service/todo.service';

export const useGetTodos = () => {
  return useRequest<AxiosError, todoType[]>(['todo-items'], () =>
    TodoService.getTodos()
  );
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutate<todoType, AxiosError, todoInputType>(
    ({ title, content }) => TodoService.createTodo(title, content),
    {
      onSuccess: (data) => {
        queryClient.setQueryData(
          ['todo-items'],
          (oldData: todoType[] | undefined) => {
            if (oldData) {
              return [...oldData, data];
            }
          }
        );
      },
    }
  );
};
