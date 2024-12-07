import React from 'react';
import './TaskColumn.css';

import TaskCard from './TaskCard';

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <section className='task_column'>
      <h2 className='task_column_heading'>
        <img className='task_column_icon' src={icon} />
        {title}
      </h2>
      {tasks.map((tasks, index) => {
        return (
          tasks.status === status && (
            <TaskCard
              key={index}
              title={tasks.task}
              tags={tasks.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
        );
      })}
    </section>
  );
};

export default TaskColumn;
