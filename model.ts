
// 1. TaskStatus literal union
export type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task interface
export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

let nextId = 1;

// 3. addTask operation
export function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: nextId++,
    title,
    status: "todo",
  };
  return [...tasks, newTask];
}

// 4. completeTask operation
export function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
}

// 5. filterByStatus operation
export function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((task) => task.status === status);
}

// 6. Extra operation required by assignment
export function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((task) => task.id !== id);
}