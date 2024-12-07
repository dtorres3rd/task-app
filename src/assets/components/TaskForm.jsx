// this boilerplate is produced by typing "rafce"

import React, { useState } from 'react';
import './TaskForm.css';
import Tag from './Tag';

const TaskForm = () => {
  const [taskData, settaskData] = useState({
    task: '',
    status: 'todo',
  });

  const handleChange = (e) => {
    /* an input form must have 'name' property for this to work, see textbox (input) and dropdown (select) for identification purposes */
    const { name, value } = e.target;

    settaskData((prevValue) => {
      /* [name] might be key name 'task' or 'status' from an input form then update the value */
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // this will prevent default forms behavior - refresh the whole page. This is what we want for a SPA
    console.log(taskData);
  };

  return (
    <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          className='task_input'
          placeholder='Enter your task'
          onChange={handleChange}
        ></input>

        <div className='task_form_botton_line'>
          <div>
            <Tag tagName='HTML' />
            <Tag tagName='CSS' />
            <Tag tagName='Javascript' />
            <Tag tagName='React' />
            <Tag tagName='Node' />
          </div>

          <div>
            <select
              name='status'
              className='task_status'
              onChange={handleChange}
            >
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
