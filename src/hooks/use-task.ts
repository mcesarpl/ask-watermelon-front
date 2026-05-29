import useLocalStorage from "./local-storage-manager";
import { TASKS_KEY, TaskState, type Task } from "../models/tasks";
import React from "react";
import { delay } from "../helpers/utils";

export default function useTask() {
  interface updataTaskPayload {
    id: string
    title: Task["title"]
  }

  interface updataTaskStatus {
    id: string
    concluded: boolean
  }

  const [tasksData, setTasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);

  const [tasks, setTasks] = React.useState<Task[]>([])
  const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);
  const [isUpdatingTask, setIsUpdatingTask] = React.useState(false);
  const [isDeletingTask, setIsDeletingTask] = React.useState(false);

  async function fetchTasks() {
    if(isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
  }


  function prepareTasks() {
    console.log("prepareTasks", tasks);

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: TaskState.Creating,
      },
    ]);

    setTasksData((prevTasks) => [
      ...prevTasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }


  async function updateTask({ id, title }: updataTaskPayload) {
    console.log("updateTask", tasks);
    setIsUpdatingTask(true);

    await delay(1000);

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        console.log({taskId: task.id, id, result: task.id === id})
        if (task.id === id) {
          return {
            ...task,
            state: TaskState.Created,
            title,
          };
        }

        return task;
      })
    );

    setTasksData((prevTasks) =>
      prevTasks.map((task) => {
        console.log({taskId: task.id, id, result: task.id === id})
        if (task.id === id) {
          return {
            ...task,
            state: TaskState.Created,
            title,
          };
        }

        return task;
      })
    );

    setIsUpdatingTask(false);
  }

  function updateTaskStatus({ id, concluded }: updataTaskStatus) {
    console.log("updateTaskStatus", tasks);

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        console.log({taskId: task.id, id, result: task.id === id})
        if (task.id === id) {
          return {
            ...task,
            concluded: concluded,
          };
        }

        return task;
      })
    );

    setTasksData((prevTasks) =>
      prevTasks.map((task) => {
        console.log({taskId: task.id, id, result: task.id === id})
        if (task.id === id) {
          return {
            ...task,
            concluded: concluded,
          };
        }

        return task;
      })
    );
  }
    
  async function deleteTask(id: string) {
    console.log("deleteTask", tasks);
    setIsDeletingTask(true);

    await delay(1000);

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setTasksData((prevTasks) => prevTasks.filter((task) => task.id !== id));

    setIsDeletingTask(false);
  }

  React.useEffect(() => {
    fetchTasks();
  }, [tasksData])

  return {
    tasks,
    tasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    prepareTasks,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isLoadingTasks,
    isUpdatingTask,
    isDeletingTask
  }
}