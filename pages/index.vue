<template>
  <div>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="入力してください" />
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" v-model="task.completed" />
        {{ task.text }}
        <button @click="removeTask(task.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTasksStore } from '~/store/tasks.js';

export default {
  setup() {
    const store = useTasksStore();

    return {
      newTask: store.newTask,
      tasks: store.tasks,
      addTask: store.addTask,
      removeTask: store.removeTask
    };
  }
};
</script>
