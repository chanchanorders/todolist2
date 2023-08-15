// stores/tasks.js
import { defineStore } from 'pinia';

export const useTasksStore = defineStore({
  id: 'tasks',
  state: () => ({
    newTask: '',
    tasks: []
  }),
  actions: {
    addTask() {
      if (this.newTask.trim() === '') return;

      this.tasks.push({
        id: Date.now(),
        text: this.newTask,
        completed: false
      });
      this.newTask = '';
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
});
