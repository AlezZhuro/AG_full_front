const API_BASE_URL = import.meta.env.VITE_API_URL;

const apiRoutes = {
  allTasks: () => '/tasks',
  fetchTask: (id: number) => `/tasks/${id}`,
};
export { API_BASE_URL, apiRoutes };
