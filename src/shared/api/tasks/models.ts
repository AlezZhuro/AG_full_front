export interface TaskDTO {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}


export interface TaskListResponse {
  items: TaskDTO[];
  count: number;
}
