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

export const useGetTodoById = (id: string | undefined) => {
  return useRequest<AxiosError, todoType>(
    [`todo-item-${id}`],
    () => TodoService.getTodoById(id),
    {
      enabled: id ? true : false,
    }
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

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  type idType = { id: string };

  return useMutate<todoType, AxiosError, todoInputType & idType>(
    ({ id, title, content }) => TodoService.updateTodo(id, title, content),
    {
      onSuccess: (data, variables) => {
        queryClient.setQueryData(
          ['todo-items'],
          (oldData: todoType[] | undefined) => {
            if (oldData) {
              const findIndex = oldData.findIndex(
                ({ id }) => id === variables!.id
              );
              const newData = [
                ...oldData.slice(0, findIndex),
                data,
                ...oldData.slice(findIndex + 1),
              ];
              return newData;
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
