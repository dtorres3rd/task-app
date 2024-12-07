import React, { useState, useEffect } from 'react';
import './App.css';
import todoIcon from './assets/images/direct-hit.png';
import inProgressIcon from './assets/images/glowing-star.png';
import doneIcon from './assets/images/check-mark-button.png';

import TaskForm from './assets/components/TaskForm';
import TaskColumn from './assets/components/TaskColumn';

const oldTasks = localStorage.getItem('tasks');

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  /* 1st args = what to run, 2nd args = when to run */
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => {
      return index !== taskIndex;
    });

    setTasks(newTasks);
  };

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <main className='app_main'>
        <TaskColumn
          title='To Do'
          icon={todoIcon}
          tasks={tasks}
          status='todo'
          handleDelete={handleDelete}
        />
        <TaskColumn
          title='In Progress'
          icon={inProgressIcon}
          tasks={tasks}
          status='inprogress'
          handleDelete={handleDelete}
        />
        <TaskColumn
          title='Done'
          icon={doneIcon}
          tasks={tasks}
          status='done'
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
