import CustomInput from './CustomInput';
import TodoList from './TodoList';

import classes from './TasksBlock.module.scss';

const TasksBlock = () => {
  return (
    <div className={classes.tasks}>
      <CustomInput />
      <TodoList />
    </div>
  );
};

export default TasksBlock;
