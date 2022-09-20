export type TodoItem = {
  itemId: Number;
  title: string;
  description?: string;
  created: string;
  lastUpdated: string;
  due: string;
  dateCompleted?: string | null;
  toBeDeleted: boolean;
  completed: boolean;
};
