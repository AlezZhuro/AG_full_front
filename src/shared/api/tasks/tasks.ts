import { apiRoutes } from '@/shared/config';
import { apiInstance } from '../base';
import { NewTaskObjectDTO, TaskEntityResponse, TaskListResponse } from './models';
import { AxiosResponse } from 'axios';

const getTasks = async (): Promise<AxiosResponse<TaskListResponse>> => {
  return apiInstance.get<TaskListResponse>(apiRoutes.allTasks());
};

const addTask = async (task: NewTaskObjectDTO) => {
  return apiInstance.post<TaskEntityResponse>(apiRoutes.allTasks(), task);
};

const fetchTask = async (id: number) => {
  return apiInstance.get<TaskEntityResponse>(apiRoutes.fetchTask(id));
};

export { getTasks, addTask , fetchTask};
