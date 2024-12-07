// this boilerplate is produced by typing "rafce"

import React from 'react';
import './TaskForm.css';
import Tag from './Tag';

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
            <Tag tagName='HTML' />
            <Tag tagName='CSS' />
            <Tag tagName='Javascript' />
            <Tag tagName='React' />
            <Tag tagName='Node' />
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
