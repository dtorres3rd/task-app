import React from 'react';
import './App.css';
import todoIcon from './assets/images/direct-hit.png';
import inProgressIcon from './assets/images/glowing-star.png';
import doneIcon from './assets/images/check-mark-button.png';

import TaskForm from './assets/components/TaskForm';
import TaskColumn from './assets/components/TaskColumn';

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
        <TaskColumn title='To Do' icon={todoIcon} />
        <TaskColumn title='In Progress' icon={inProgressIcon} />
        <TaskColumn title='Done' icon={doneIcon} />
      </main>
    </div>
  );
};

export default App;
