type TaskEntity = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};
export type TaskDTO = TaskEntity & SubtaskDTO;

export type SubtaskDTO = {
  subtasks?: TaskEntity[];
};

export type TaskListResponse = CommonResponse & {
  items: TaskDTO[];
  count: number;
};

export interface CommonResponse {
  success: boolean;
}

export type TaskEntityResponse = CommonResponse & {
  entity: TaskDTO & SubtaskDTO[];
};

export type NewTaskObjectDTO = Omit<TaskDTO, 'id' | 'completed'>;
