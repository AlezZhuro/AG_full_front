import { apiRoutes } from '@/shared/config';
import { apiInstance } from '../base';
import {
  NewTaskObjectDTO,
  TaskEntityResponse,
} from './models';

const addSubtask = async (taskID: number, subtask: NewTaskObjectDTO) => {
  return apiInstance.post<TaskEntityResponse>(apiRoutes.addSubtask(taskID), subtask);
};

const fetchSubtask = async (id: number) => {
  return apiInstance.get<TaskEntityResponse>(apiRoutes.fetchSubtask(id));
};

export { addSubtask, fetchSubtask };
