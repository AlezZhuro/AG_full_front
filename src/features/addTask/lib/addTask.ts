import { taskStore } from '@/entities/task';
import { NewTaskObjectDTO } from '@/shared/api/models';
import * as api from '@/shared/api/tasks/tasks';

const addTask = async (newTask: NewTaskObjectDTO) => {
  try {
    const {
      data: { success, entity },
    } = await api.addTask(newTask);
    if (success) {
      taskStore.addOne(entity);
    }

    return success;
  } catch (error) {
    const errorMsg = error?.response?.data?.errors[0] ?? error?.message;

    taskStore.errorHandler(errorMsg);
  }
};

export { addTask };
