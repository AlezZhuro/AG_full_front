import { apiRoutes } from '@/shared/config';
import { apiInstance } from '../base';
import { TaskListResponse } from './models';
import { AxiosResponse } from 'axios';

// export type GetTasksListParams = {
//   page?: number;
//   limit?: number;
// };

const getTasks = async (): Promise<AxiosResponse<TaskListResponse>> => {
  return apiInstance.get<TaskListResponse>(apiRoutes.allTasks());
};

export { getTasks };  
