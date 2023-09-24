import { AddTaskButton } from '@/features/addTask';
import TaskList from '@/widgets/taskList/ui';

export const HomePage = () => {
  return (
    <>
      <div>Home</div>
      <TaskList />
      <AddTaskButton />
    </>
  );
};
