<template>
  <section>
    <h2>Tasks</h2>
    <div class="task-container">
      <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Enter a new task" />
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <div class="task-item">
            <input type="checkbox" @change="toggleCompleted(task)" :checked="task.completed" />
            <label :class="{ 'task-completed': task.completed }">{{ task.text }}</label>
          </div>
          <button @click="deleteTask(index)">Delete</button>
        </li>
      </ul>
    </div>
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
        const capitalizedTask = this.newTask.charAt(0).toUpperCase() + this.newTask.slice(1);
        this.tasks.push({ text: capitalizedTask, completed: false });
        this.newTask = "";
      }
    },
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
    toggleCompleted(task) {
    task.completed = !task.completed;
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
ul {
  list-style-type: none;
  padding: 0;
}
.task-completed {
  text-decoration: line-through;
  color: red;
}
.task-item {
  display: flex;
  align-items: center;
}

input[type="checkbox"] {
  margin-right: 10px;
}
.task-container {
  width: 50%;
  margin: 0 auto;
}

@media screen and (max-width: 767px) {
  .task-container {
    width: 90%;
  }
}


</style>
