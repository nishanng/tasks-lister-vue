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
input[type="text"] {
  font-size: 16px;
  padding: 8px 12px;
  margin-bottom: 10px;
  width: 60%;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  font-size: 16px;
  padding: 8px 12px;
  margin-bottom: 10px;
  margin-left: 10px; /* Add this line to create space between the input field and button */
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #1e90ff;
  color: white;
}

button:hover {
  background-color: #1c86ee;
}

</style>
