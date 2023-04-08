<template>
  <section>
    <h2>Tasks</h2>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Add a new task" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ 'completed-task': task.completed }">{{ task.title }}</span>
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ToDoList",
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ title: this.newTask.trim(), completed: false });
        this.newTask = "";
      }
    },
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
  },
};
</script>

<style scoped>
section {
  margin: 20px;
}

.completed-task {
  text-decoration: line-through;
  color: #ccc;
}
</style>
