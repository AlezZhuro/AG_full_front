const API_BASE_URL = import.meta.env.VITE_API_URL;

const apiRoutes = {
  allTasks: () => '/tasks',
  fetchTask: (id: number) => `/tasks/${id}`,
  fetchSubtask: (id: number) => `/subtask/${id}`,
  addSubtask: (id: number) => `/task/${id}/add`,
};
export { API_BASE_URL, apiRoutes };
