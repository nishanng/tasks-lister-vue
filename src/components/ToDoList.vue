<template>
  <section>
    <h2>Tasks</h2>
    <div class="task-container">
      <div class="input-container">
        <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Enter a new task" />
        <button @click="addTask">Add</button>
      </div>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <div class="task-item">
            <input type="checkbox" @change="toggleCompleted(task)" :checked="task.completed" />
            <label :class="{ 'task-completed': task.completed }">{{ task.text }}</label>
          </div>
        </li>
      </ul>
      <button v-if="showDeleteAllButton" class="delete-all-button" @click="deleteAllTasks">Delete All</button>
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
  computed: {
    showDeleteAllButton() {
      return this.tasks.length > 1;
    },
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
    deleteAllTasks() {
      this.tasks = [];
    },
    toggleCompleted(task) {
    task.completed = !task.completed;
    if (task.completed) {
      task.textClass = 'task-completed';
    } else {
      task.textClass = '';
    }
  }
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

input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

ul {
  list-style-type: none; /* Add this line to remove bullet points */
  padding: 0;
  margin: 0; /* Add this line to remove the default margin */
}

li {
  display: flex; /* Add this line to align items in a row */
  align-items: center; /* Add this line to vertically align items */
}

button {
  font-size: 16px;
  padding: 8px 12px;
  margin-bottom: 10px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #1e90ff;
  color: white;
}

button:hover {
  background-color: #1c86ee;
}
.task-container {
  width: 50%;
  margin: 20px auto;
  text-align: center;
}
.task-completed {
  text-decoration: line-through;
  color: red;
}

.delete-button {
  font-size: 14px;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #ff6961;
  color: white;
}

.delete-button:hover {
  background-color: #ff4136;
}

.delete-all-button {
  font-size: 16px;
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #dc143c;
  color: white;
}
@media screen and (max-width: 600px) {
  input[type="text"] {
    width: 100%;
  }
}
</style>

