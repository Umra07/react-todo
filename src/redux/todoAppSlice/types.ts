export interface initialStateTypes {
  todosLists: TodoListType[];
  selectedList: TodoListType | undefined;
  todos: TodoTypes[];
  sort: '' | 'active' | 'completed';
}

export interface TodoListType {
  id: string;
  name: string;
}

export interface TodoTypes {
  listId: string;
  id: string;
  text: string;
  completed: boolean;
}
