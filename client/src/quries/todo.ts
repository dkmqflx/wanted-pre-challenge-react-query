import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutate<null, AxiosError, string>(
    (id) => TodoService.deleteTodo(id),
    {
      onSuccess: (_data, selectedId) => {
        queryClient.setQueryData(
          ['todo-items'],
          (oldData: todoType[] | undefined) => {
            if (oldData) {
              const newData = oldData.filter(({ id }) => id !== selectedId);
              return newData;
            }
          }
        );
      },
    }
  );
};
