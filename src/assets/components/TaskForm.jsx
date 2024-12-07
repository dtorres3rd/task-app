// this boilerplate is produced by typing "rafce"

import React from 'react';
import './TaskForm.css';

const TaskForm = () => {
  return (
    <header className='app_header'>
      <form>
        <input
          type='text'
          className='task_input'
          placeholder='Enter your task'
        ></input>
        <div className='task_form_botton_line'>
          <div>
            <button className='tag'>HTML</button>
            <button className='tag'>CSS</button>
            <button className='tag'>JavaScript</button>
            <button className='tag'>React</button>
            <button className='tag'>Node</button>
          </div>
          <div>
            <select className='task_status'>
              <option value='todo'>To do</option>
              <option value='inprogress'>In progress</option>
              <option value='done'>Done</option>
            </select>
            <button type='submit' className='task_submit'>
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
