import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle task deletion
  const handleDeleteTask = (textToDelete) => {
    setTasks(tasks.filter(task => task.text !== textToDelete));
  };

  // Handle category selection
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Handle new task submission
  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Filter tasks based on selected category
  const tasksToDisplay = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList 
        tasks={tasksToDisplay}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
