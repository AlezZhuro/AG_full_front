import { AddTask } from '@/features/addTask';
import TaskList from '@/widgets/taskList/ui';

export const HomePage = () => {
  return (
    <>
      <div>Home</div>
      <TaskList />
      <AddTask />
    </>
  );
};
