import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  DropResult as IDropResult
} from 'react-beautiful-dnd';

import { HeaderOfPage } from '../../components/HeaderOfPage/HeaderOfPage';
import { MagnifyingGlassSpinner } from '../../components/MagnifyingGlassSpinner/MagnifyingGlassSpinner';
import { TodoListDroppable } from '../../components/TodoListDroppable/TodoListDroppable';
import { UpdateTaskElement } from '../../components/UpdateTaskElement/UpdateTaskElement';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchTodos, ITodo } from '../../store/slices/dataTodos/fetchTodos';
import { selectTodosByTitle } from '../../store/slices/dataTodos/customSelectorOfTodos';

import { LoadingStatuses } from '../../constants/LoadingStatuses';

interface IAccOfReduceTodos {
  [index: string]: ITodo[];
  completed: ITodo[];
  uncompleted: ITodo[];
}

export const TodosPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchString, setSearchString] = useState<string>('');

  const { userId } = useAppSelector((store) => store.dataUser);
  const { statusOfLoading, userIdsWithLoadedTodos, allTodosAreLoaded } = useAppSelector(
    (store) => store.dataTodos
  );
  const todos = useAppSelector((store) => selectTodosByTitle(store, searchString));

  const todosByStatusOfCompleted = todos.reduce(
    (acc: IAccOfReduceTodos, todo: ITodo) => {
      if (todo.completed) acc.completed.push(todo);
      if (!todo.completed) acc.uncompleted.push(todo);
      return acc;
    },
    { completed: [], uncompleted: [] }
  );

  const performed–°onditionOfFetchTodos =
    (userId && !userIdsWithLoadedTodos.includes(userId)) || (!userId && !allTodosAreLoaded);

  const onDragEndHandler = async (result: IDropResult) => {
    if (!result) return;
    const { destination, source, draggableId } = result;
    if (destination && destination.droppableId !== source.droppableId) {
      const value = todos.find((task) => task.id === Number(draggableId));
      if (value) {
        const nextValues = { ...value };
        nextValues.completed = !value.completed;

        await dispatch(fetchTodos({ method: 'patch', values: nextValues }));
      }
    }
  };

  useEffect(() => {
    if (performed–°onditionOfFetchTodos) dispatch(fetchTodos({ method: 'get' }));
  }, [userId]);

  return (
    <div className="contianer-page">
      <HeaderOfPage
        title="–ó–į–ī–į—á–ł"
        nameOfPage="todosPage"
        searchParams={{ searchString, setSearchString }}
      />

      <div className="container-fluid">
        {statusOfLoading === LoadingStatuses.pending && <MagnifyingGlassSpinner />}

        {statusOfLoading === LoadingStatuses.fulfilled && (
          <div className="pb-3 row">
            <DragDropContext onDragEnd={onDragEndHandler}>
              <TodoListDroppable
                droppableId="completed"
                title="–ó–į–≤–Ķ—Ä—ą–Ķ–Ĺ–Ĺ—č–Ķ:"
                todos={todosByStatusOfCompleted.completed}
              />
              <TodoListDroppable
                droppableId="uncompleted"
                title="–í –Ņ—Ä–ĺ—Ü–Ķ—Ā—Ā–Ķ:"
                todos={todosByStatusOfCompleted.uncompleted}
              />
            </DragDropContext>
          </div>
        )}
      </div>
    </div>
  );
};
