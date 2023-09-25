import { taskStore } from '@/entities/task';
import { NewTaskObjectDTO } from '@/shared/api/models';
import * as api from '@/shared/api/subtasks/subtasks';

const addSubtask = async (newTask: NewTaskObjectDTO) => {
  try {
    const taskID = taskStore.openedItem?.id;
    const {
      data: { success },
    } = await api.addSubtask(taskID, newTask);
    if (success) {
      taskStore.loadOneTask(taskID);
    }

    return success;
  } catch (error) {
    const errorMsg = error?.response?.data?.errors[0] ?? error?.message;

    taskStore.errorHandler(errorMsg);
  }
};

export { addSubtask };
