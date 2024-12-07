// this boilerplate is produced by typing "rafce"

import React, { useState } from 'react';
import './TaskForm.css';
import Tag from './Tag';

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo',
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => {
      return item === tag;
    });
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => {
        return item !== tag;
      });

      setTaskData((prevValue) => {
        return { ...prevValue, tags: filterTags };
      });
    } else {
      setTaskData((prevValue) => {
        return { ...prevValue, tags: [...prevValue.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    /* an input form must have 'name' property for this to work, see textbox (input) and dropdown (select) for identification purposes */
    const { name, value } = e.target;

    setTaskData((prevValue) => {
      /* [name] might be key name 'task' or 'status' from an input form then update the value */
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // this will prevent default forms behavior - refresh the whole page. This is what we want for a SPA
    // console.log(taskData);
    setTasks((prevValue) => {
      return [...prevValue, taskData];
    });

    // reset form fields
    setTaskData({
      task: '',
      status: 'todo',
      tags: [],
    });
  };

  return (
    <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          value={taskData.task}
          className='task_input'
          placeholder='Enter your task'
          onChange={handleChange}
        ></input>

        <div className='task_form_botton_line'>
          <div>
            {/* passing 'selectTag' function in prop name selectTag */}
            <Tag
              tagName='HTML'
              selectTag={selectTag}
              selected={checkTag('HTML')}
            />
            <Tag
              tagName='CSS'
              selectTag={selectTag}
              selected={checkTag('CSS')}
            />
            <Tag
              tagName='Javascript'
              selectTag={selectTag}
              selected={checkTag('Javascript')}
            />
            <Tag
              tagName='React'
              selectTag={selectTag}
              selected={checkTag('React')}
            />
            <Tag
              tagName='Node'
              selectTag={selectTag}
              selected={checkTag('Node')}
            />
          </div>

          <div>
            <select
              name='status'
              value={taskData.status}
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
